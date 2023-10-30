import {INodeProperties} from "n8n-workflow";
import {Category, CourierShipmentsMethod} from "../types";

export const courierShipmentsDefinition: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				category: [
					Category.CourierShipments
				],
			},
		},
		options: [
			// Courier Shipments
			// {
			// 	name: 'Get Journal List',
			// 	value: OrdersMethod.GetJournalList,
			// 	description: 'The method allows you to download a list of order events from the last 3 days',
			// 	action: 'Gets journal list',
			// },
		],
		// default: OrdersMethod.GetOrders.toString(),
		default: '',
		noDataExpression: true,
	},
	// ...
];
