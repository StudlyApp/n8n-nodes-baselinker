import {makeBaselinkerRequest} from "../../request.maker";

export async function addOrderReceiptFileExecution(args: {
	apiKey: string;
	input: {
		"receipt_id": number,
		"file": string,
		"external_receipt_number": string,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addOrderReceiptFile',
		input: args.input
	});
}
