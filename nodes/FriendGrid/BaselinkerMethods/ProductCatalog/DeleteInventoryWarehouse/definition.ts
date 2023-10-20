import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const deleteInventoryWarehouseDefinition: INodeProperties[] = [
	{
		displayName: 'Warehouse ID',
		name: 'warehouse_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.DeleteInventoryWarehouse
				],
			},
		},
		default:'',
		placeholder: '206',
		description:'ID of the warehouse',
	},
]
