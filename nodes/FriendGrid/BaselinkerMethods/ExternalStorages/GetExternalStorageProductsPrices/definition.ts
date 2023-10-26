import {INodeProperties} from "n8n-workflow";
import {Category, ExternalStoragesMethod} from "../../types";

export const getExternalStorageProductsPricesDefinition: INodeProperties[] = [
	{
		displayName: 'Storage ID',
		name: 'storage_id',
		type: 'string',
		displayOptions: {
			show: {
				category: [
					Category.ExternalStorages
				],
				operation: [
					ExternalStoragesMethod.GetExternalStorageProductsPrices
				],
			},
		},
		default: '',
		placeholder: 'shop_2445',
		description: 'Storage ID in format "[type:shop|warehouse]_[ID:int]" (e.g. "shop_2445")',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				category: [
					Category.ExternalStorages
				],
				operation: [
					ExternalStoragesMethod.GetExternalStorageProductsPrices
				],
			},
		},
		options: [
			{
				displayName: 'Page (Optional)',
				name: 'page',
				type: 'number',
				default: 0,
				description: '(optional) Results paging',
			},
		],
	},
];
