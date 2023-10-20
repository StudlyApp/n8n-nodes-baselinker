import {makeBaselinkerRequest} from "../../request.maker";

export async function getInventoryProductLogsExecution(args: {
	apiKey: string;
	input: {
		"product_id": number,
		"date_from"?: number,
		"date_to"?: number,
		"log_type"?: number,
		"sort"?: number,
		"page"?: number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getInventoryProductLogs',
		input: args.input
	});
}
