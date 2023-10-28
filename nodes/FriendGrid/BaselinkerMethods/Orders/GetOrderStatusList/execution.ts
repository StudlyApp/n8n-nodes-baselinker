import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrderStatusListExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrderStatusList',
	});
}
