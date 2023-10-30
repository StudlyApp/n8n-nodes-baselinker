import {makeBaselinkerRequest} from "../../request.maker";

export async function setOrderStatusesExecution(args: {
	apiKey: string;
	input: {
		"order_ids": Array<number>,
		"status_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'setOrderStatuses',
		input: args.input
	});
}
