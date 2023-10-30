import {makeBaselinkerRequest} from "../../request.maker";

export async function deleteOrderProductExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
		"order_product_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'deleteOrderProduct',
		input: args.input
	});
}
