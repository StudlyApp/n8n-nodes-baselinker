import {makeBaselinkerRequest} from "../../request.maker";

export async function createPackageManualExecution(args: {
	apiKey: string;
	input: {
		"order_id": number,
		"courier_code": string,
		"package_number": string,
		"pickup_date": number,
		"return_shipment"?: boolean | null,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'createPackageManual',
		input: args.input
	});
}
