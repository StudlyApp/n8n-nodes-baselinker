import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../types";
import {getJournalListDefinition} from "./GetJournalList/definition";
import {addOrderDefinition} from "./AddOrder/definition";
import {getOrderSourcesDefinition} from "./GetOrderSources/definition";


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
			{
				name: 'Add Order',
				value: OrdersMethod.AddOrder,
				description: 'The method allows adding a new order to the BaseLinker order manager',
				action: 'Add order',
			},
			{
				name: 'Get Order Sources',
				value: OrdersMethod.GetOrderSources,
				description: 'The method returns types of order sources along with their IDs. Order sources are grouped by their type that corresponds to a field order_source from the getOrders method. Available source types are "personal", "shop" or "marketplace_code" e.g. "ebay", "amazon", "ceneo", "emag", "allegro", etc.',
				action: 'Get types of order sources along with their IDS',
			},
		],
		// default: OrdersMethod.GetOrders.toString(),
		default: '',
		noDataExpression: true,
	},
	...getJournalListDefinition,
	...addOrderDefinition,
	...getOrderSourcesDefinition,
];
