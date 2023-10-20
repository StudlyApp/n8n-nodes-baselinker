import {makeBaselinkerRequest} from "../../request.maker";

export async function deleteInventoryWarehouseExecution(args: {
	apiKey: string;
	input: {
		"warehouse_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'deleteInventoryWarehouse',
		input: args.input
	});
}
