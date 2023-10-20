import {makeBaselinkerRequest} from "../../request.maker";

export async function addInventoryManufacturerExecution(args: {
	apiKey: string;
	input: {
		"manufacturer_id"?: number | null;
		"name": string;
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addInventoryManufacturer',
		input: args.input
	});
}
