import {makeBaselinkerRequest} from "../../request.maker";

export async function getExternalStorageProductsPricesExecution(args: {
	apiKey: string;
	input: {
		"storage_id": string,
		"page"?: number | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getExternalStorageProductsPrices',
		input: args.input
	});
}
