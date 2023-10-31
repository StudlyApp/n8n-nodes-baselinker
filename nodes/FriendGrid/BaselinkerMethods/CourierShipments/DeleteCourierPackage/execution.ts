import {makeBaselinkerRequest} from "../../request.maker";

export async function deleteCourierPackageExecution(args: {
	apiKey: string;
	input: {
		"courier_code": string,
		"package_id"?: number | null,
		"package_number"?: string | null,
		"force_delete"?: boolean | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'deleteCourierPackage',
		input: args.input
	});
}
