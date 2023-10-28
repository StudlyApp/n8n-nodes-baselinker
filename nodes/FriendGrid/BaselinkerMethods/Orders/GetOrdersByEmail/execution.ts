import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrdersByEmailExecution(args: {
	apiKey: string;
	input: {
		"email": string,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrdersByEmail',
		input: args.input
	});
}
