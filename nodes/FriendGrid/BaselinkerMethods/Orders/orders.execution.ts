import {IExecuteFunctions} from "n8n-core";
import {OrdersMethod} from "../types";
import zod from "zod";

import {getJournalListExecution} from "./GetJournalList/execution";
import {addOrderExecution} from "./AddOrder/execution";
import {getOrderSourcesExecution} from "./GetOrderSources/execution";


export async function ordersExecution(
	data: IExecuteFunctions,
	apiKey: string,
	operation: string,
	category: string,
	i: number,
) {
	if (operation === OrdersMethod.GetJournalList) {
		const schema = zod.object({
			last_log_id: zod.number(),
			logs_types: zod.array(
				zod.number()
			),
			order_id: zod.number().nullish()
		});

		const metadataArraySchema = zod.array(zod.object({
			event_id: zod.number(),
		}))

		const metadataObjectSchema = zod.object({
			metadataValues: metadataArraySchema,
		})

		const logs_types = metadataObjectSchema.parse(data.getNodeParameter('logs_types', i)).metadataValues?.map(el => el.event_id);

		return await getJournalListExecution({
			apiKey: apiKey,
			input: schema.parse({
				last_log_id: data.getNodeParameter('last_log_id', i),
				logs_types,
				order_id: data.getNodeParameter('order_id', i),
			})
		});
	}

	if (operation === OrdersMethod.AddOrder) {
		const schema = zod.object({
			currency: zod.string(),
			email: zod.string().email( { message: "🚨 Invalid email address!"}),
			products: zod.array(
				zod.record(zod.string(), zod.union([
					zod.string(), zod.number()
				]))
			),
		});

		const schemaAdditionalFields = zod.object({
			order_status_id: zod.number().nullish(),
			custom_source_id: zod.number().nullish(),
			payment_method: zod.string().nullish(),
			payment_method_cod: zod.boolean().nullish(),
			paid: zod.boolean().nullish(),
			user_comments: zod.string().nullish(),
			admin_comments: zod.string().nullish(),
			phone: zod.string().nullish(),
			user_login: zod.string().nullish(),
			delivery_method: zod.string().nullish(),
			delivery_price: zod.number().nullish(),
			delivery_fullname: zod.string().nullish(),
			delivery_company: zod.string().nullish(),
			delivery_address: zod.string().nullish(),
			delivery_postcode: zod.string().nullish(),
			delivery_city: zod.string().nullish(),
			delivery_state: zod.string().nullish(),
			delivery_country_code: zod.string().nullish(),
			delivery_point_id: zod.string().nullish(),
			delivery_point_name: zod.string().nullish(),
			delivery_point_address: zod.string().nullish(),
			delivery_point_postcode: zod.string().nullish(),
			delivery_point_city: zod.string().nullish(),
			invoice_fullname: zod.string().nullish(),
			invoice_company: zod.string().nullish(),
			invoice_nip: zod.string().nullish(),
			invoice_address: zod.string().nullish(),
			invoice_postcode: zod.string().nullish(),
			invoice_city: zod.string().nullish(),
			invoice_state: zod.string().nullish(),
			invoice_country_code: zod.string().nullish(),
			want_invoice: zod.boolean().nullish(),
			extra_field_1: zod.string().nullish(),
			extra_field_2: zod.string().nullish(),
			custom_extra_fields: zod.record(
				zod.string(), zod.union([
					zod.string(),
					zod.record(zod.string(), zod.string())
				])
			).nullish()
		})

		const metadataArraySchemaOfProducts = zod.array(zod.object({
			storage: zod.string().nullish(),
			storage_id: zod.number().nullish(),
			product_id: zod.string(),
			variant_id: zod.number().nullish(),
			name: zod.string(),
			sku: zod.string().nullish(),
			ean: zod.string().nullish(),
			location: zod.string().nullish(),
			warehouse_id: zod.number().nullish(),
			attributes: zod.string().nullish(),
			price_brutto: zod.number().nonnegative(),
			tax_rate: zod.number().nonnegative(),
			quantity: zod.number().gt(0, { message: '🚨 Quantity is to small!'}),
			weight: zod.number().nullish(),
		}))


		const metadataObjectSchemaOfProducts = zod.object({
			metadataValues: metadataArraySchemaOfProducts,
		})

		const products = metadataObjectSchemaOfProducts.parse(
			data.getNodeParameter('products', i)).metadataValues?.map(el => {
				if (el.tax_rate < 1) {
					el.tax_rate = el.tax_rate*=100;
				}

				return {
					"storage": el.storage,
					"storage_id": el.storage_id,
					"product_id": el.product_id,
					"variant_id": el.variant_id,
					"name": el.name,
					"sku": el.sku,
					"ean": el.ean,
					"location": el.location,
					"warehouse_id": el.warehouse_id,
					"attributes": el.attributes,
					"price_brutto": el.price_brutto,
					"tax_rate": el.tax_rate,
					"quantity": el.quantity,
					"weight": el.weight,
				}
			}
		);
		console.log(JSON.stringify(products))


		const additionalFields = data.getNodeParameter('additionalFields', i);
		let preparedObjectForCustomExtraFields = undefined;


		const metadataArraySchemaForCustomExtraFields = zod.array(zod.object({
				extra_field_id: zod.string(),
				extra_field_name: zod.string().nullish(),
				extra_field_value: zod.string(),
			})
		)

		const metadataObjectSchemaForCustomExtraFields = zod.object({
			metadataValues: metadataArraySchemaForCustomExtraFields,
		})

		if (additionalFields.custom_extra_fields !== undefined) {
			preparedObjectForCustomExtraFields = metadataObjectSchemaForCustomExtraFields.parse(additionalFields.custom_extra_fields).metadataValues?.reduce((prev, curr) => {
				if (curr.extra_field_name) {
					prev[`extra_field_${curr.extra_field_id}`] = {
						"title": curr.extra_field_name,
						"payload": curr.extra_field_value
					}
					return prev;
				}
				prev[`extra_field_${curr.extra_field_id}`] = curr.extra_field_value
				return prev;
			}, {} as Record<string, string | { [key: string]: string }>)
		}
		console.log(JSON.stringify(preparedObjectForCustomExtraFields));

		return await addOrderExecution({
			apiKey: apiKey,
			input: {
				...schema.parse({
					currency: data.getNodeParameter('currency', i),
					email: data.getNodeParameter('email', i),
					products,
				}),
				...schemaAdditionalFields.parse({
					order_status_id: additionalFields.order_status_id,
					custom_source_id: additionalFields.custom_source_id,
					payment_method: additionalFields.payment_method,
					payment_method_cod: additionalFields.payment_method_cod,
					paid: additionalFields.paid,
					user_comments: additionalFields.user_comments,
					admin_comments: additionalFields.admin_comments,
					phone: additionalFields.phone,
					user_login: additionalFields.user_login,
					delivery_method: additionalFields.delivery_method,
					delivery_price: additionalFields.delivery_price,
					delivery_fullname: additionalFields.delivery_fullname,
					delivery_company: additionalFields.delivery_company,
					delivery_address: additionalFields.delivery_address,
					delivery_postcode: additionalFields.delivery_postcode,
					delivery_city: additionalFields.delivery_city,
					delivery_state: additionalFields.delivery_state,
					delivery_country_code: additionalFields.delivery_country_code,
					delivery_point_id: additionalFields.delivery_point_id,
					delivery_point_name: additionalFields.delivery_point_name,
					delivery_point_address: additionalFields.delivery_point_address,
					delivery_point_postcode: additionalFields.delivery_point_postcode,
					delivery_point_city: additionalFields.delivery_point_city,
					invoice_fullname: additionalFields.invoice_fullname,
					invoice_company: additionalFields.invoice_company,
					invoice_nip: additionalFields.invoice_nip,
					invoice_address: additionalFields.invoice_address,
					invoice_postcode: additionalFields.invoice_postcode,
					invoice_city: additionalFields.invoice_city,
					invoice_state: additionalFields.invoice_state,
					invoice_country_code: additionalFields.invoice_country_code,
					want_invoice: additionalFields.want_invoice,
					extra_field_1: additionalFields.extra_field_1,
					extra_field_2: additionalFields.extra_field_2,
					custom_extra_fields: preparedObjectForCustomExtraFields
				})
			}
		});
	}

	if (operation === OrdersMethod.GetOrderSources) {
		return await getOrderSourcesExecution({
			apiKey: apiKey
		});
	}
}
