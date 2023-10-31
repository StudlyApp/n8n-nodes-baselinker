import {makeBaselinkerRequest} from "../../request.maker";

export async function getCourierAccountsExecution(args: {
	apiKey: string;
	input: {
		"courier_code": string,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getCourierAccounts',
		input: args.input
	});
}
