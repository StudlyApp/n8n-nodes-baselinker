import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const addInventoryPriceGroupDefinition: INodeProperties[] = [
	{
		displayName: 'Price Group ID',
		name: 'price_group_id',
		type: 'number',
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryPriceGroup
				],
			},
		},
		default:'',
		placeholder: '105',
		description:'Price group identifier',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryPriceGroup
				],
			},
		},
		default:'Default',
		placeholder: 'USA',
		description:'Name of the price group',
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		typeOptions: {
			rows: 2,
		},
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryPriceGroup
				],
			},
		},
		default:'',
		placeholder: 'Price group for US market',
		description:'Price group description',
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryPriceGroup
				],
			},
		},
		default:'',
		placeholder: 'USD',
		description:'3-letter currency symbol e.g. PLN, EUR',
	},
]
