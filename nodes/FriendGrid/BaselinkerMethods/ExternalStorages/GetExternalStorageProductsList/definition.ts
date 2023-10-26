import {INodeProperties} from "n8n-workflow";
import {Category, ExternalStoragesMethod} from "../../types";

export const getExternalStorageProductsListDefinition: INodeProperties[] = [
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
					ExternalStoragesMethod.GetExternalStorageProductsList
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
					ExternalStoragesMethod.GetExternalStorageProductsList
				],
			},
		},
		options: [
			{
				displayName: 'Filter Category ID (Optional)',
				name: 'filter_category_id',
				type: 'string',
				default:'',
				placeholder: '543',
				description:'(optional) Retrieving products from a specific category (optional)',
			},
			{
				displayName: 'Filter Sort (Optional)',
				name: 'filter_sort',
				type: 'string',
				default:'',
				placeholder: '"ID [ASC|DESC]", "name [ASC|DESC]"...',
				description: '(optional) the value for sorting the product list. Possible values: "ID [ASC|DESC]", "name [ASC|DESC]", "quantity [ASC|DESC]", "price [ASC|DESC]".',
			},




			{
				displayName: 'Filter Sort (Optional)',
				name: 'filter_sort',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				placeholder: '23',
				description:'VAT tax rate (e.g. "20")',
			},

			{
				displayName: 'Prices',
				name: 'prices',
				placeholder: 'Add Price',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'A list containing product prices, where the key is the price group ID and value is a product gross price for a given price group. The list of price groups can be retrieved with getInventoryPriceGroups method.',
				options: [
					{
						name: 'metadataValues',
						displayName: 'Metadata',
						values: [
							{
								displayName: 'Price Group ID',
								name: 'name',
								type: 'string',
								default: '',
								description: 'ID of the Price Group',
								placeholder: '105'
							},
							{
								displayName: 'Price Value',
								name: 'value',
								type: 'number',
								typeOptions: {
									numberPrecision: 2,
								},
								default: 0,
								description: 'Value to set for the Price Group ID',
								placeholder: '20.99'
							},
						],
					},
				],
			},

		],
	},
];
