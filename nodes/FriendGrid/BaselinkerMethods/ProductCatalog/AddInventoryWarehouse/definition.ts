import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const addInventoryWarehouseDefinition: INodeProperties[] = [
	{
		displayName: 'Warehouse ID',
		name: 'warehouse_id',
		type: 'number',
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryWarehouse
				],
			},
		},
		default:'',
		placeholder: '206',
		description:'ID of the warehouse',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryWarehouse
				],
			},
		},
		default:'',
		placeholder: 'Berlin',
		description:'Warehouse name',
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
					ProductCatalogMethod.AddInventoryWarehouse
				],
			},
		},
		default:'',
		placeholder: 'Warehouse located in Berlin',
		description:'Warehouse description',
	},
	{
		displayName: 'Stock Edition',
		name: 'stock_edition',
		type: 'boolean',
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryWarehouse
				],
			},
		},
		default: false,
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description:'Is manual editing of stocks permitted. A false value means that you can only edit your stock through the API.',
	},
]
