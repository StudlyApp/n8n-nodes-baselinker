import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const getInventoryAvailableTextFieldKeysDefinition: INodeProperties[] = [
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
					ProductCatalogMethod.GetInventoryAvailableTextFieldKeys
				],
			},
		},
		default:'',
		placeholder: '307',
		description:'Catalog ID. The list of identifiers can be retrieved by the getInventories method (inventory_id field).',
	},
]
