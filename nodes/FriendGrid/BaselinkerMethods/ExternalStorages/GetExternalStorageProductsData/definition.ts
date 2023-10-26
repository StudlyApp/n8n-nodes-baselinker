import {INodeProperties} from "n8n-workflow";
import {Category, ExternalStoragesMethod} from "../../types";

export const getExternalStorageProductsDataDefinition: INodeProperties[] = [
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
					ExternalStoragesMethod.GetExternalStorageProductsData
				],
			},
		},
		default: '',
		placeholder: 'shop_2445',
		description: 'Storage ID in format "[type:shop|warehouse]_[ID:int]" (e.g. "shop_2445")',
	},
	{
		displayName: 'Products',
		name: 'products',
		placeholder: 'Add Product',
		type: 'fixedCollection',
		default: [],
		typeOptions: {
			multipleValues: true,
		},
		description: 'An array of product ID numbers to download',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Product ID',
						name: 'product_id',
						type: 'number',
						default: 0,
					},
				],
			},
		],
		displayOptions: {
			show: {
				category: [
					Category.ExternalStorages
				],
				operation: [
					ExternalStoragesMethod.GetExternalStorageProductsData
				],
			},
		},
	}
];
