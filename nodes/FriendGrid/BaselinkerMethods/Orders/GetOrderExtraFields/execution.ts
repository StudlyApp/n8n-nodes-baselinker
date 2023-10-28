import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrderExtraFieldsExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrderExtraFields',
	});
}
