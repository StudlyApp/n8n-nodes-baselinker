import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const getInventoryProductsPricesDefinition: INodeProperties[] = [
	{
		displayName: 'Inventory ID',
		name: 'inventory_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.GetInventoryProductsPrices
				],
			},
		},
		default:'',
		placeholder: '307',
		description:'Catalog ID. The list of identifiers can be retrieved using the method getInventories.',
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
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.GetInventoryProductsPrices
				],
			},
		},
		options: [
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: '',
				placeholder: '',
				description: '(optional) Results paging (1000 products per page for BaseLinker warehouse)',
			},
		],
	},
]



