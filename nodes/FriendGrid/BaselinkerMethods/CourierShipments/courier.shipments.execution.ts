import {IExecuteFunctions} from "n8n-core";
import {CourierShipmentsMethod} from "../types";
import zod from "zod";
import {createPackageExecution} from "./CreatePackage/execution";

export async function courierShipmentsExecution(
	data: IExecuteFunctions,
	apiKey: string,
	operation: string,
	category: string,
	i: number,
) {
	if (operation === CourierShipmentsMethod.CreatePackage) {
		const schema = zod.object({
			order_id: zod.number(),
			courier_code: zod.string(),
			fields: zod.array(
				zod.object({
					id: zod.string(),
					value: zod.string()
				})
			),
			packages: zod.array(
				zod.record(zod.string(), zod.number())
			),
		});

		const schemaAdditionalFields = zod.object({
			account_id: zod.number().nullish(),
		})

		const metadataArraySchemaForFields = zod.array(zod.object({
			id: zod.string(),
			value: zod.string(),
		}))

		const metadataObjectSchemaForFields = zod.object({
			metadataValues: metadataArraySchemaForFields,
		})

		const fields = metadataObjectSchemaForFields.parse(
			data.getNodeParameter('fields', i)).metadataValues?.map(el => {
				return {
					"id": el.id,
					"value": el.value,
				}
			}
		);

		const metadataArraySchemaForPackages = zod.array(zod.object({
			value: zod.object({
				metadataValues: zod.array(zod.object({
					id: zod.string(),
					value: zod.number()
				}))
			})
		}))

		const metadataObjectSchemaForPackages = zod.object({
			metadataValues: metadataArraySchemaForPackages,
		})

		const packages = metadataObjectSchemaForPackages.parse(data.getNodeParameter('packages', i)).metadataValues.
			reduce((prev, curr) => {
				const reducedMetadataValues = curr.value.metadataValues.reduce((prev2, curr2) => {
					prev2[curr2.id] = curr2.value;
					return prev2;
				}, {} as Record<string, number>)
			prev.push(reducedMetadataValues);
			return prev;
		}, [] as Array<Record<string, number>>)

		const additionalFields = data.getNodeParameter('additionalFields', i);

		return await createPackageExecution({
			apiKey: apiKey,
			input: {
				...schema.parse({
					order_id: data.getNodeParameter('order_id', i),
					courier_code: data.getNodeParameter('courier_code', i),
					fields,
					packages,
				}),
				...schemaAdditionalFields.parse({
					account_id: additionalFields.account_id,
				})
			}
		});
	}
}
