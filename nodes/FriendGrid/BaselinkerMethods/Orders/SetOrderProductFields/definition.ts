import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../../types";

export const setOrderProductFieldsDefinition: INodeProperties[] = [
	{
		displayName: 'Order ID',
		name: 'order_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.SetOrderProductFields
				],
			},
		},
		default: 0,
		placeholder: '3754894',
		description: 'Order identifier from the BaseLinker order manager. Field required.',
	},
	{
		displayName: 'Order Product ID',
		name: 'order_product_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.SetOrderProductFields
				],
			},
		},
		default: 0,
		description: 'Order item ID from BaseLinker order manager. Field required.',
		placeholder: '59157160'
	},
	{
		displayName: 'Additional Fields (Optional)',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.SetOrderProductFields
				],
			},
		},
		options: [
			{
				displayName: 'Storage (Optional)',
				name: 'storage',
				type: 'string',
				default: '',
				placeholder: 'db',
				description: 'Type of product source storage (available values: "db" - BaseLinker internal catalog, "shop" - online shop storage, "warehouse" - the connected wholesaler)',
			},
			{
				displayName: 'Storage ID (Optional)',
				name: 'storage_id',
				type: 'string',
				default: '',
				placeholder: '0',
				description: 'The identifier of the storage (inventory/shop/warehouse) from which the product comes',
			},
			{
				displayName: 'Product ID (Optional)',
				name: 'product_id',
				type: 'string',
				default: '',
				placeholder: '5434',
				description: 'Product identifier in BaseLinker or shop storage. Blank if the product number is not known.',
			},
			{
				displayName: 'Variant ID (Optional)',
				name: 'variant_id',
				type: 'string',
				default: '',
				placeholder: '52124',
				description: 'Product variant ID. Blank if the variant number is unknown.',
			},
			{
				displayName: 'Auction ID (Optional)',
				name: 'auction_id',
				type: 'string',
				default: '',
				description: 'Listing ID number (if the order comes from ebay/allegro)',
			},
			{
				displayName: 'Name (Optional)',
				name: 'name',
				type: 'string',
				default: '',
				placeholder: 'Harry Potter and the Chamber of Secrets',
				description: 'Product name',
			},
			{
				displayName: 'SKU (Optional)',
				name: 'sku',
				type: 'string',
				default: '',
				placeholder: 'LU4235',
				description: 'Product SKU number',
			},
			{
				displayName: 'EAN (Optional)',
				name: 'ean',
				type: 'string',
				default: '',
				placeholder: '1597368451236',
				description: 'Product EAN number',
			},
			{
				displayName: 'Location (Optional)',
				name: 'location',
				type: 'string',
				default: '',
				placeholder: 'A1-13-7',
				description: 'Product location',
			},
			{
				displayName: 'Warehouse ID (Optional)',
				name: 'warehouse_id',
				type: 'number',
				default: 0,
				description: 'Product source warehouse identifier. Only applies to products from BaseLinker inventory. By default warehouse_id is determined based on the warehouse identifiers in the existing products of the order. If no such product exist, it will be determined based on the source of the order.',
			},
			{
				displayName: 'Attributes (Optional)',
				name: 'attributes',
				type: 'string',
				default: '',
				placeholder: 'colour red',
				description: 'The detailed product attributes, e.g. "Colour: blue" (Variant name)'
			},
			{
				displayName: 'Price Brutto',
				name: 'price_brutto',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				placeholder: '20.00',
				description: 'Single item gross price',
			},
			{
				displayName: 'Tax Rate',
				name: 'tax_rate',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				placeholder: '23',
				description: 'VAT rate',
			},
			{
				displayName: 'Quantity',
				name: 'quantity',
				type: 'number',
				default: 0,
				placeholder: '2',
				description: 'Number of pieces',
			},
			{
				displayName: 'Weight (Optional)',
				name: 'weight',
				type: 'number',
				typeOptions: {
					numberPrecision: 2,
				},
				default: 0,
				placeholder: '1',
				description: 'Single piece weight'
			},
		],
	},
];
