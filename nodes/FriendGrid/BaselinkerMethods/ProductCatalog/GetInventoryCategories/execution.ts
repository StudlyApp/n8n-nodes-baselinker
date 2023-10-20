import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryCategoriesExecution(args: {
	apiKey: string;
	input: {
		"inventory_id"?: number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryCategories',
		input: args.input
	});
}
