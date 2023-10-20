import {makeBaselinkerRequest} from "../../request.maker";

export async function runProductMacroTriggerExecution(args: {
	apiKey: string;
	input: {
		"product_id": number;
		"trigger_id": number;
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'runProductMacroTrigger',
		input: args.input
	});
}
