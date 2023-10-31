import {makeBaselinkerRequest} from "../../request.maker";

export async function getCouriersListExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getCouriersList',
	});
}
