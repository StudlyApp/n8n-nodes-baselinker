import {makeBaselinkerRequest} from "../../request.maker";

export async function setOrderStatusExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
		"status_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'setOrderStatus',
		input: args.input
	});
}
