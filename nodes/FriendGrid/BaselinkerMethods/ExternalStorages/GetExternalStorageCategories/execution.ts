import {makeBaselinkerRequest} from "../../request.maker";

export async function getExternalStorageCategoriesExecution(args: {
	apiKey: string;
	input: {
		"storage_id": string,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getExternalStorageCategories',
		input: args.input
	});
}
