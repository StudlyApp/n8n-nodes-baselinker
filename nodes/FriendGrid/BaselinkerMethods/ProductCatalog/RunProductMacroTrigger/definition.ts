import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const runProductMacroTriggerDefinition: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'product_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.RunProductMacroTrigger
				],
			},
		},
		default:'',
		placeholder: '14347626',
		description:'Product identifier from BaseLinker product manager',
	},
	{
		displayName: 'Trigger ID',
		name: 'trigger_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.RunProductMacroTrigger
				],
			},
		},
		default:'',
		placeholder: '12413',
		description:'Identifier of personal trigger from products automatic actions',
	},
]
