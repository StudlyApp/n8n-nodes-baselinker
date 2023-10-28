import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../../types";

export const getOrdersByPhoneDefinition: INodeProperties[] = [
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.GetOrdersByPhone
				],
			},
		},
		default: '',
		placeholder: '+48123456789',
		description: 'The phone number we search for in orders',
	},
];
