import {makeBaselinkerRequest} from "../../request.maker";

export async function deleteInventoryProductExecution(args: {
	apiKey: string;
	input: {
		"product_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'deleteInventoryProduct',
		input: args.input
	});
}
