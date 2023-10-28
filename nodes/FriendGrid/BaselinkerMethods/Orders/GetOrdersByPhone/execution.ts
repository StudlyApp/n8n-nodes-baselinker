import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrdersByPhoneExecution(args: {
	apiKey: string;
	input: {
		"phone": string,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrdersByPhone',
		input: args.input
	});
}
