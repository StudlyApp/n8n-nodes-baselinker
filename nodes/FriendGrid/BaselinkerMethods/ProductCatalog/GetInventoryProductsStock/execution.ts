import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryProductsStockExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
		"page"?: number | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryProductsStock',
		input: args.input
	});
}
