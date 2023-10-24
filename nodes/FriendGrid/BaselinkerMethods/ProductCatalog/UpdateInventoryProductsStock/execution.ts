import {makeBaselinkerRequest} from "../../request.maker";

export async function updateInventoryProductsStockExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": string,
		"products": Record<string, Record<string, number>>,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'updateInventoryProductsStock',
		input: args.input
	});
}
