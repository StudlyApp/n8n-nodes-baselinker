import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrderPaymentsHistoryExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
		"show_full_history"?: boolean | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrderPaymentsHistory',
		input: args.input
	});
}
