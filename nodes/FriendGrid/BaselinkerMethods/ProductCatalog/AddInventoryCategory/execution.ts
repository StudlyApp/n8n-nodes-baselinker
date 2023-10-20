import {makeBaselinkerRequest} from "../../request.maker";

export async function addInventoryCategoryExecution(args: {
	apiKey: string;
	input: {
		"inventory_id"?: number;
		"category_id"?: number;
		"name": string;
		"parent_id": number;
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addInventoryPriceGroup',
		input: args.input
	});
}
