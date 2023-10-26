import {makeBaselinkerRequest} from "../../request.maker";

export async function getExternalStorageProductsListExecution(args: {
	apiKey: string;
	input: {
		"storage_id": string,
		"products": Array<number>,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getExternalStorageProductsList',
		input: args.input,
	});
}
