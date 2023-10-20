import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryWarehousesExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryWarehouses',
	});
}
