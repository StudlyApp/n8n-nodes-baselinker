import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryPriceGroupsExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryPriceGroups',
	});
}
