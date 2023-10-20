import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryIntegrationsExecution(args: {
	apiKey: string;
	input: {
		"inventory_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryIntegrations',
		input: args.input
	});
}
