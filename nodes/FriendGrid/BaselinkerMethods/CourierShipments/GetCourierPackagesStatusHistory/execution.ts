import {makeBaselinkerRequest} from "../../request.maker";

export async function getCourierPackagesStatusHistoryExecution(args: {
	apiKey: string;
	input: {
		"package_ids": Array<number>,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getCourierPackagesStatusHistory',
		input: args.input
	});
}
