import {makeBaselinkerRequest} from "../../request.maker";

export async function addInventoryProductExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": string,
		"product_id"?: string,
		"parent_id"?: string,
		"is_bundle"?: boolean,
		"ean"?: string,
		"sku"?: string,
		"tax_rate"?: number,
		"weight"?: number,
		"height"?: number,
		"length"?: number,
		"star"?: number,
		"manufacturer_id"?: number,
		"category_id"?: number,
		"prices"?: null,
		"stock"?: null,
		"locations"?: null,
		"text_fields"?: null,
		"images"?: null,
		"links"?: null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addInventoryProduct',
		input: args.input
	});
}
