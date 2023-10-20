import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const getInventoryCategoriesDefinition: INodeProperties[] = [
	{
		displayName: 'Inventory ID',
		name: 'inventory_id',
		type: 'number',
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.GetInventoryCategories
				],
			},
		},
		default:'',
		placeholder: '',
		description:'Catalog ID. The list of identifiers can be retrieved by the getInventories method (inventory_id field). To retrieve categories available for all catalogs created in BaseLinker, this field should be omitted.',
	},
]
