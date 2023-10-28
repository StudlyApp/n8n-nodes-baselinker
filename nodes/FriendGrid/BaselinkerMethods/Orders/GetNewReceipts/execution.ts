import {makeBaselinkerRequest} from "../../request.maker";

export async function getNewReceiptsExecution(args: {
	apiKey: string;
	input: {
		"series_id"?: number | null,
		"id_from"?: number | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getNewReceipts',
		input: args.input
	});
}
