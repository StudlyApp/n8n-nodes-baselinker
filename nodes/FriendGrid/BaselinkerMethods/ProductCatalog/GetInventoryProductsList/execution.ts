import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryProductsListExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
		"filter_id"?: number,
		"filter_category_id"?: number,
		"filter_ean"?: string,
		"filter_sku"?: string,
		"filter_name"?: string,
		"filter_price_from"?: number,
		"filter_price_to"?: number,
		"filter_stock_from"?: number,
		"filter_stock_to"?: number,
		"page"?: number,
		"filter_sort"?: string
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryProductsList',
		input: args.input
	});
}
