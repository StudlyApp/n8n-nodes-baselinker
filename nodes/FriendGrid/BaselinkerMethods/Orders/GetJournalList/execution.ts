import {makeBaselinkerRequest} from "../../request.maker";

export async function getJournalListExecution(args: {
	apiKey: string;
	input: {
		"last_log_id": number,
		"logs_types": Array<number>,
		"order_id"?: number | null
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getJournalList',
		input: args.input
	});
}
