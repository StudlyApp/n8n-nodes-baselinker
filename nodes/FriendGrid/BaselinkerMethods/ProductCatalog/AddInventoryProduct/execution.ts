import {makeBaselinkerRequest} from "../../request.maker";

export async function addInventoryProductExecution(args: {
	apiKey: string;
	input: {
		"inventory_id"?: number,
		"name": string,
		"description": string,
		"languages": Array< string | number >,
		"default_language": string,
		"price_groups": Array< string | number >,
		"default_price_group": number,
		"warehouses": Array< string | number >,
		"default_warehouse": string,
		"reservations": boolean,
	};
}) {
	return await makeBaselinkerRequest({
		apiKey: args.apiKey,
		methodName: 'addInventoryProduct',
		input: args.input
	});
}
