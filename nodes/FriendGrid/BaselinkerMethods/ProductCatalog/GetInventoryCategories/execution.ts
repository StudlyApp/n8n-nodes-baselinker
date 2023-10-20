import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryCategoriesExecution(args: {
	apiKey: string;
	input: {
		"inventory_id"?: number | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryCategories',
		input: args.input
	});
}
