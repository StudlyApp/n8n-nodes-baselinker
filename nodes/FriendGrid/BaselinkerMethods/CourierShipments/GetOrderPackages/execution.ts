import {makeBaselinkerRequest} from "../../request.maker";

export async function getOrderPackagesExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getOrderPackages',
		input: args.input
	});
}
