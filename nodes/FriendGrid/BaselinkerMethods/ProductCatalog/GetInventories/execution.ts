import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoriesExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventories'
	});
}
