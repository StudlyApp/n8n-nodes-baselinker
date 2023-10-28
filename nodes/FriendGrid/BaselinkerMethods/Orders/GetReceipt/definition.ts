import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../../types";

export const getReceiptDefinition: INodeProperties[] = [
	{
		displayName: 'Receipt ID (Not Required if Order_ID Is Provided)',
		name: 'receipt_id',
		type: 'number',
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.GetReceipt
				],
			},
		},
		default: 0,
		description: 'Receipt ID. Not required if order_id is provided.',
	},
	{
		displayName: 'Order ID (Not Required if Receipt_ID Is Provided)',
		name: 'order_id',
		type: 'number',
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.GetReceipt
				],
			},
		},
		default: 0,
		placeholder: '143476260',
		description: 'Receipt ID. Not required if order_id is provided.',
	},
];
