import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryExtraFieldsExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryExtraFields'
	});
}
