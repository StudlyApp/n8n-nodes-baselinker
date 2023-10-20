import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryProductsDataExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
		"products": Array<number>,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryProductsData',
		input: args.input
	});
}
