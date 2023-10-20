import {makeBaselinkerRequest} from "../../request.maker";

export async function addInventoryCategoryExecution(args: {
	apiKey: string;
	input: {
		"inventory_id"?: number | null;
		"category_id"?: number | null;
		"name": string;
		"parent_id": number;
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addInventoryCategory',
		input: args.input
	});
}
