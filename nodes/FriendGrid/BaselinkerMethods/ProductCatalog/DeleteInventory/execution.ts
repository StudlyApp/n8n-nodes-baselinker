import {makeBaselinkerRequest} from "../../request.maker";

export async function deleteInventoryExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'DeleteInventory',
		input: args.input
	});
}
