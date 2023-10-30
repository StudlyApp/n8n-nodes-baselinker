import {makeBaselinkerRequest} from "../../request.maker";

export async function getInvoiceFileExecution(args: {
	apiKey: string;
	input: {
		"invoice_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInvoiceFile',
		input: args.input
	});
}
