import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrderTransactionDetailsExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrderTransactionDetails',
		input: args.input
	});
}
