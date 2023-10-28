import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../../types";

export const getNewReceiptsDefinition: INodeProperties[] = [
	{
		displayName: 'Additional Fields (Optional)',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.GetNewReceipts
				],
			},
		},
		options: [
			{
				displayName: 'Series ID (Optional)',
				name: 'series_id',
				type: 'number',
				default: 0,
				placeholder: '0',
				description: '(optional) The numbering series ID allows filtering by the receipt numbering series. Using multiple series numbering for receipts is recommended when the user has multiple fiscal printers. Each fiscal printer should have a separate series.',
			},
			{
				displayName: 'ID From (Optional)',
				name: 'id_from',
				type: 'number',
				default: 0,
				placeholder: '1',
				description: '(optional) ID from which logs are to be retrieved. [default=0].',
			},
		],
	},
];
