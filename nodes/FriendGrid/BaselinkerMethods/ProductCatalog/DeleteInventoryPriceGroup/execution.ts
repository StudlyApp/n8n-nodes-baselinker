import {makeBaselinkerRequest} from "../../request.maker";

export async function deleteInventoryPriceGroupExecution(args: {
	apiKey: string;
	input: {
		"price_group_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'deleteInventoryPriceGroup',
		input: args.input
	});
}
