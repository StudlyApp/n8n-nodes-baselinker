import {makeBaselinkerRequest} from "../../request.maker";

export async function addInventoryWarehouseExecution(args: {
	apiKey: string;
	input: {
		"warehouse_id"?: number;
		"name": string;
		"description"?: string;
		"stock_edition"?: boolean;
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addInventoryPriceGroup',
		input: args.input
	});
}
