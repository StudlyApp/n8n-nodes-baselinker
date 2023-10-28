import {makeBaselinkerRequest} from "../../request.maker";

export async function getReceiptExecution(args: {
	apiKey: string;
	input: {
		"receipt_id"?: number | null,
		"order_id"?: number | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getReceipt',
		input: args.input
	});
}
