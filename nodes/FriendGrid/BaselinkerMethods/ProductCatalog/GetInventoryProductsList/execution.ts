import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryProductsListExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
		"filter_id"?: number | null,
		"filter_category_id"?: number | null,
		"filter_ean"?: string | null,
		"filter_sku"?: string | null,
		"filter_name"?: string | null,
		"filter_price_from"?: number | null,
		"filter_price_to"?: number | null,
		"filter_stock_from"?: number | null,
		"filter_stock_to"?: number | null,
		"page"?: number | null,
		"filter_sort"?: string | null
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryProductsList',
		input: args.input
	});
}
