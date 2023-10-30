import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../../types";

export const getInvoiceFileDefinition: INodeProperties[] = [
	{
		displayName: 'Invoice ID',
		name: 'invoice_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.GetInvoiceFile
				],
			},
		},
		default: 0,
		placeholder: '153845',
		description: 'BaseLinker invoice identifier',
	},
];
