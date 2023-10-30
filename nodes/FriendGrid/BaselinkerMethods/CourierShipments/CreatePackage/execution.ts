import {makeBaselinkerRequest} from "../../request.maker";

export async function createPackageExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
		"courier_code": string,
		"account_id"?: number | null,
		"fields": Array<Record<string, string>>,
		"packages": Array<Record<string, number>>,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'createPackage',
		input: args.input
	});
}
