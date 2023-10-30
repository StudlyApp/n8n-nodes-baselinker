import {makeBaselinkerRequest} from "../../request.maker";

export async function addOrderInvoiceFileExecution(args: {
	apiKey: string;
	input: {
		"invoice_id": number,
		"file": string,
		"external_invoice_number": string,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addOrderInvoiceFile',
		input: args.input
	});
}
