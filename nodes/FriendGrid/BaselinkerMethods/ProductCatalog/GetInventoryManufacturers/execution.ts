import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryManufacturersExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryManufacturers'
	});
}
