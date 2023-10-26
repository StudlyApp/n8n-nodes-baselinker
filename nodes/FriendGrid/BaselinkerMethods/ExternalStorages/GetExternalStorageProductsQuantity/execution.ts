import {makeBaselinkerRequest} from "../../request.maker";

export async function getExternalStorageProductsQuantityExecution(args: {
	apiKey: string;
	input: {
		"storage_id": string,
		"page"?: number | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getExternalStorageProductsQuantity',
		input: args.input
	});
}
