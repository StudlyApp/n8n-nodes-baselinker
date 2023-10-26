import {makeBaselinkerRequest} from "../../request.maker";

export async function getExternalStoragesListExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getExternalStoragesList',
	});
}
