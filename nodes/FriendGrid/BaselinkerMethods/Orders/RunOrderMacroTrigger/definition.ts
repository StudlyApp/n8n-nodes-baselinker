import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../../types";

export const runOrderMacroTriggerDefinition: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'order_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.RunOrderMacroTrigger
				],
			},
		},
		default: 0,
		placeholder: '143476260',
		description: 'Order identifier from BaseLinker order manager',
	},
	{
		displayName: 'Trigger ID',
		name: 'trigger_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.RunOrderMacroTrigger
				],
			},
		},
		default: 0,
		placeholder: '12413',
		description: 'Identifier of personal trigger from orders automatic actions',
	},
];
