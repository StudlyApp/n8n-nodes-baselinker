import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const deleteInventoryPriceGroupDefinition: INodeProperties[] = [
	{
		displayName: 'Price Group ID',
		name: 'price_group_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.DeleteInventoryPriceGroup
				],
			},
		},
		default: 0,
		placeholder: '105',
		description:'Price group identifier',
	},
]
