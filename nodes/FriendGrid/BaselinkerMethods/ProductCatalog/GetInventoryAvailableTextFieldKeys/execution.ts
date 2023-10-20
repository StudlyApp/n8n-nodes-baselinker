import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryAvailableTextFieldKeysExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryAvailableTextFieldKeys',
		input: args.input
	});
}
