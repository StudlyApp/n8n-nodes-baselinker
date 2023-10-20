import {INodeProperties} from "n8n-workflow";
import {Category, ProductCatalogMethod} from "../../types";

export const addInventoryProductDefinition: INodeProperties[] = [
	{
		displayName: 'Inventory ID',
		name: 'inventory_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			},
		},
		default: '',
		placeholder: '307',
		description:'Catalog ID. The list of identifiers can be retrieved using the method getInventories. (inventory_id field).',
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
					ProductCatalogMethod.AddInventoryProduct
				],
			},
		},
		options: [
			{
				displayName: 'Product ID',
				name: 'product_id',
				type: 'string',
				default:'',
				placeholder: '2685',
				description:'Main product identifier, given only during the update. Should be left blank when creating a new product. The new product identifier is returned as a response to this method.',
			},
			{
				displayName: 'Parent ID',
				name: 'parent_id',
				type: 'string',
				default:'',
				placeholder: '',
				description:'Product parent ID. To be provided only if the added/edited product is a variant of another product.',
			},
			{
				displayName: 'Is Bundle',
				name: 'is_bundle',
				type: 'boolean',
				default: false,
				// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
				description:'Is the given product a part of a bundle',
			},
			{
				displayName: 'EAN',
				name: 'ean',
				type: 'string',
				default:'',
				placeholder: '983628103943',
				description:'Product EAN number',
			},
			{
				displayName: 'SKU',
				name: 'sku',
				type: 'string',
				default:'',
				placeholder: 'EPL-432',
				description:'Product SKU number',
			},
			{
				displayName: 'TAX RATE',
				name: 'tax_rate',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 23.00,
				placeholder: '23',
				description:'VAT tax rate (e.g. "20")',
			},
			{
				displayName: 'Weight',
				name: 'weight',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0.25,
				placeholder: '0.25',
				description:'Weight in kilograms',
			},
			{
				displayName: 'Height',
				name: 'height',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0.3,
				placeholder: '0.3',
				description:'Product height',
			},
			{
				displayName: 'Width',
				name: 'width',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0.2,
				placeholder: '0.2',
				description:'Product width',
			},
			{
				displayName: 'Length',
				name: 'length',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0.05,
				placeholder: '0.05',
				description:'Product length',
			},
			{
				displayName: 'Star',
				name: 'star',
				type: 'number',
				default: 0,
				placeholder: '2',
				description:'Product star type. It takes from 0 to 5 values. 0 means no starring.',
			},
			{
				displayName: 'Manufacturer ID',
				name: 'manufacturer_id',
				type: 'number',
				default: 0,
				placeholder: '5',
				description:'Product manufacturer ID. IDs can be retrieved with getInventoryManufacturers method.',
			},
			{
				displayName: 'Category ID',
				name: 'category_id',
				type: 'number',
				default: 0,
				placeholder: '3',
				description:'Product category ID (category must be previously created with addInventoryCategories) method',
			},
		],
	},








	{
		displayName: 'Languages',
		name: 'languages',
		placeholder: 'Add Language',
		type: 'fixedCollection',
		required: true,
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description: 'An array of languages available in the catalogue',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Language',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Shortcut for the language',
						placeholder: 'en'
					},
				],
			},
		],
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			}
		},
	},
	{
		displayName: 'Default Language',
		name: 'default_language',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			},
		},
		default:'',
		placeholder: 'en',
		description:'Default catalogue language. Must be included in the "languages" parameter.',
	},
	{
		displayName: 'Price Groups',
		name: 'price_groups',
		placeholder: 'Add Price Group',
		type: 'fixedCollection',
		required: true,
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description: 'An array of price group identifiers available in the catalogue. The list of price group identifiers can be downloaded using the getInventoryPriceGroups method.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Price Group',
						name: 'value',
						type: 'number',
						default: '',
						description: 'ID for the price group',
						placeholder: '105'
					},
				],
			},
		],
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			}
		},
	},
	{
		displayName: 'Default Price Group',
		name: 'default_price_group',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			},
		},
		default: '',
		placeholder: '105',
		description:'ID of the price group default for the catalogue. The identifier must be included in the "price_groups" parameter.',
	},
	{
		displayName: 'Warehouses',
		name: 'warehouses',
		placeholder: 'Add warehouse',
		type: 'fixedCollection',
		required: true,
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description: 'An array of warehouse identifiers available in the catalogue. The list of warehouse identifiers can be retrieved using the getInventoryWarehouses API method. The format of the identifier should be as follows: "[type:bl|shop|warehouse]_[ID:int]". (e.g. "shop_2445").',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Warehouse',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Identifier for the warehouse (e.g. "shop_2334")',
						placeholder: 'shop_2334'
					},
				],
			},
		],
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			}
		},
	},
	{
		displayName: 'Default Warehouse',
		name: 'default_warehouse',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			},
		},
		default:'',
		placeholder: 'shop_2334',
		description: 'Identifier of the warehouse default for the catalogue. The identifier must be included in the "warehouses" parameter.',
	},
	{
		displayName: 'Reservations',
		name: 'reservations',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.ProductCatalog
				],
				operation: [
					ProductCatalogMethod.AddInventoryProduct
				],
			},
		},
		default:true,
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description: 'Does this catalogue support reservations',
	},
]



