import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryProductsPricesExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
		"page"?: number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryProductsPrices',
		input: args.input
	});
}
