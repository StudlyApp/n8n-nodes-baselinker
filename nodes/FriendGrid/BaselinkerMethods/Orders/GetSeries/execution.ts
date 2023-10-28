import {makeBaselinkerRequest} from "../../request.maker";

export async function getSeriesExecution(args: {
	apiKey: string;
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'getSeries',
	});
}
