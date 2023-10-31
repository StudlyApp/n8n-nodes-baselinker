import {makeBaselinkerRequest} from "../../request.maker";

export async function getCourierServicesExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
		"courier_code": string,
		"account_id"?: number | null,
		"fields"?: Array<Record<string, string>> | null,
		"packages"?: Array<Record<string, number>> | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getCourierServices',
		input: args.input
	});
}
