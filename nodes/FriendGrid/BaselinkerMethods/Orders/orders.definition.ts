import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../types";
import {getJournalListDefinition} from "./GetJournalList/definition";


export const ordersDefinition: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
			},
		},
		options: [
			// Orders
			{
				name: 'Get Journal List',
				value: OrdersMethod.GetJournalList,
				description: 'The method allows you to download a list of order events from the last 3 days',
				action: 'Get journal list',
			},
		],
		// default: OrdersMethod.GetOrders.toString(),
		default: '',
		noDataExpression: true,
	},
	...getJournalListDefinition,
];
