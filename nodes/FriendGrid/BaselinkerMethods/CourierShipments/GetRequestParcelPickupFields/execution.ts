import {makeBaselinkerRequest} from "../../request.maker";

export async function getRequestParcelPickupFieldsExecution(args: {
	apiKey: string;
	input: {
		"courier_code": string,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getRequestParcelPickupFields',
		input: args.input
	});
}
