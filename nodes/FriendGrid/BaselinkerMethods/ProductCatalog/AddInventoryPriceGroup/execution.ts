import {makeBaselinkerRequest} from "../../request.maker";

export async function addInventoryPriceGroupExecution(args: {
	apiKey: string;
	input: {
		"price_group_id"?: number;
		"name"?: string;
		"description"?: string;
		"currency": string;
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addInventoryPriceGroup',
		input: args.input
	});
}
