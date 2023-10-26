import {makeBaselinkerRequest} from "../../request.maker";

export async function getExternalStorageProductsDataExecution(args: {
	apiKey: string;
	input: {
		"storage_id": string,
		"products": Array<number>,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getExternalStorageProductsData',
		input: args.input
	});
}
