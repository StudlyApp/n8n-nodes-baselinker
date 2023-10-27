import {INodeProperties} from "n8n-workflow";
import {Category, OrdersMethod} from "../../types";

export const addOrderDefinition: INodeProperties[] = [
	{
		displayName: 'Order Status ID',
		name: 'order_status_id',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: 0,
		placeholder: '6624',
		description: 'Order status (the list available to retrieve with getOrderStatusList)',
	},
	{
		displayName: 'Custom Source ID (Optional)',
		name: 'custom_source_id',
		type: 'number',
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: 0,
		description: '(optional) Identifier of custom order source defined in BaseLinker panel. If not provided, default order source is assigned.',
	},
	{
		displayName: 'Date Add',
		name: 'date_add',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: 0,
		placeholder: '1698395514',
		description: 'Date of order creation (in unix time format)',
	},
	{
		displayName: 'Currency',
		name: 'currency',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		placeholder: 'GBP',
		description: '3-letter currency symbol (e.g. EUR, PLN)',
	},
	{
		displayName: 'Payment Method',
		name: 'payment_method',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: 'PayPal',
		placeholder: 'GBP',
	},
	{
		displayName: 'Payment Method Cod',
		name: 'payment_method_cod',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: false,
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description: 'Flag indicating whether the type of payment is COD (cash on delivery)'
	},
	{
		displayName: 'Paid',
		name: 'paid',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: true,
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description: 'Information whether the order is already paid. The value "1" automatically adds a full payment to the order.'
	},
	{
		displayName: 'User Comments',
		name: 'user_comments',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Buyer comments',
		placeholder: 'User comment'
	},
	{
		displayName: 'Admin Comments',
		name: 'admin_comments',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Seller comments',
		placeholder: 'Seller test comments'
	},
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Buyer e-mail address',
		placeholder: 'test@test.com'
	},
	{
		displayName: 'Phone',
		name: 'phone',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Buyer phone number',
		placeholder: '693123123'
	},
	{
		displayName: 'User Login',
		name: 'user_login',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Allegro or eBay user login',
		placeholder: 'nick1'
	},
	{
		displayName: 'Delivery Method',
		name: 'delivery_method',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery method name',
		placeholder: 'Expedited shipping'
	},
	{
		displayName: 'Delivery Price',
		name: 'delivery_price',
		type: 'number',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: 0,
		description: 'Gross delivery price',
		placeholder: '10'
	},
	{
		displayName: 'Delivery Fullname',
		name: 'delivery_fullname',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery address - name and surname',
		placeholder: 'John Doe'
	},
	{
		displayName: 'Delivery Company',
		name: 'delivery_company',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery address - company',
		placeholder: 'Company'
	},
	{
		displayName: 'Delivery Address',
		name: 'delivery_address',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery address - street and number',
		placeholder: 'Long Str 12'
	},
	{
		displayName: 'Delivery Postcode',
		name: 'delivery_postcode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery address - postcode',
		placeholder: 'E2 8HQ'
	},
	{
		displayName: 'Delivery City',
		name: 'delivery_city',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery address - city',
		placeholder: 'London'
	},
	{
		displayName: 'Delivery State',
		name: 'delivery_state',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery address - state/province',
		placeholder: ''
	},
	{
		displayName: 'Delivery Country Code',
		name: 'delivery_country_code',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Delivery address - country code (two-letter, e.g. EN)',
		placeholder: 'GB'
	},
	{
		displayName: 'Delivery Point ID',
		name: 'delivery_point_id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Pick-up point delivery - pick-up point identifier',
		placeholder: ''
	},
	{
		displayName: 'Delivery Point Name',
		name: 'delivery_point_name',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Pick-up point delivery - pick-up point name',
		placeholder: ''
	},
	{
		displayName: 'Delivery Point Address',
		name: 'delivery_point_address',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Pick-up point delivery - pick-up point address',
		placeholder: ''
	},
	{
		displayName: 'Delivery Point Postcode',
		name: 'delivery_point_postcode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Pick-up point delivery - pick-up point postcode',
		placeholder: ''
	},
	{
		displayName: 'Delivery Point City',
		name: 'delivery_point_city',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Pick-up point delivery - pick-up point city',
		placeholder: ''
	},
	{
		displayName: 'Invoice Fullnam',
		name: 'invoice_fullname',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - name and surname',
		placeholder: 'John Doe'
	},
	{
		displayName: 'Invoice Company',
		name: 'invoice_company',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - company',
		placeholder: 'Company'
	},
	{
		displayName: 'Invoice NIP',
		name: 'invoice_nip',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - Vat Reg. no./tax number.',
		placeholder: 'GB8943245'
	},
	{
		displayName: 'Invoice Address',
		name: 'invoice_address',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - street and house number',
		placeholder: 'Long Str 12'
	},
	{
		displayName: 'Invoice Postcode',
		name: 'invoice_postcode',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - postcode',
		placeholder: 'E2 8HQ'
	},
	{
		displayName: 'Invoice City',
		name: 'invoice_city',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - city',
		placeholder: 'London'
	},
	{
		displayName: 'Invoice State',
		name: 'invoice_state',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - state/province',
		placeholder: ''
	},
	{
		displayName: 'Invoice Country Code',
		name: 'invoice_country_code',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Billing details - country code (two-letter, e.g. EN)',
		placeholder: 'GB'
	},
	{
		displayName: 'Want Invoice',
		name: 'want_invoice',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: false,
		// eslint-disable-next-line n8n-nodes-base/node-param-description-boolean-without-whether
		description: 'Flag indicating whether the customer wants an invoice (1 - yes, 0 - no)',
	},
	{
		displayName: 'Extra Field 1',
		name: 'extra_field_1',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Value of the "additional field 1". - the seller can store any information there.',
		placeholder: 'field test 1'
	},
	{
		displayName: 'Extra Field 2',
		name: 'extra_field_2',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
		default: '',
		description: 'Value of the "additional field 2". - the seller can store any information there.',
		placeholder: ''
	},
	{
		displayName: 'Custom Extra Fields (Optional)',
		name: 'custom_extra_fields',
		placeholder: 'Add Extra Field',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description: '\tA list containing order custom extra fields, where the key is the extra field ID and value is an extra field content for given extra field. The list of extra fields can be retrieved with getOrderExtraFields method.\n' +
			'In case of removing a field the empty string is expected.',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Extra Field Name',
						name: 'extra_field_name',
						type: 'string',
						default: '',
						placeholder: '135',
						description: 'Name (key) is the extra field ID'
					},
					{
						displayName: 'Extra Field Value',
						name: 'extra_field_value',
						type: 'string',
						default: '',
						placeholder: 'B2B',
						description: 'Value is an extra field content for given extra field'
					},
				],
			},
		],
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
	},
	{
		displayName: 'Products',
		name: 'products',
		placeholder: 'Add Product',
		type: 'fixedCollection',
		required: true,
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		description: 'Order product array. Each element of the array is also an array containing fields:\n' +
			'storage (varchar) - type of magazine from which the product comes (available values: "db" - BaseLinker internal catalog, "shop" - the online store magazine, "warehouse" - a connected wholesaler).\n' +
			'storage_id (int) - the identifier of the magazine from which the product comes (one of the shops connected to the account). Value "0" for a product from the BaseLinker internal catalog.\n' +
			'product_id (varchar) - Product identifier in BaseLinker or store magazine. Blank if the product number is unknown\n' +
			'variant_id (int) - Product variant ID. Blank if the variant number is unknown\n' +
			'name (varchar) - Product name\n' +
			'sku (varchar) - Product sku\n' +
			'ean (varchar) - Product ean\n' +
			'location (varchar) - Product location\n' +
			'warehouse_id (int) - Product source warehouse identifier. Only applies to products from BaseLinker inventory. By default warehouse_id is determined based on the source of the order.\n' +
			'attributes (varchar) - Specific product attributes (e.g. "Color: blue")\n' +
			'price_brutto (float) - Single item gross price\n' +
			'tax_rate (float) - VAT rate\n' +
			'quantity (int) - Quantity of pieces\n' +
			'weight (float) - Single item weight',
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				values: [
					{
						displayName: 'Storage',
						name: 'storage',
						type: 'string',
						default: '',
						placeholder: 'db',
						description: 'Type of magazine from which the product comes (available values: "db" - BaseLinker internal catalog, "shop" - the online store magazine, "warehouse" - a connected wholesaler)'
					},
					{
						displayName: 'Storage ID',
						name: 'storage_id',
						type: 'number',
						default: 0,
						description: 'The identifier of the magazine from which the product comes (one of the shops connected to the account). Value "0" for a product from the BaseLinker internal catalog.'
					},
					{
						displayName: 'Product ID',
						name: 'product_id',
						type: 'string',
						default: '',
						placeholder: '5434',
						description: 'Product identifier in BaseLinker or store magazine. Blank if the product number is unknown.'
					},
					{
						displayName: 'Variant ID',
						name: 'variant_id',
						type: 'number',
						default: 0,
						description: 'Product variant ID. Blank if the variant number is unknown.'
					},
					{
						displayName: 'Name',
						name: 'name',
						type: 'string',
						default: '',
						placeholder: 'Harry Potter and the Chamber of Secrets',
						description: 'Product name'
					},
					{
						displayName: 'SKU',
						name: 'sku',
						type: 'string',
						default: '',
						placeholder: 'LU4235',
						description: 'Product sku'
					},
					{
						displayName: 'EAN',
						name: 'ean',
						type: 'string',
						default: '',
						placeholder: '1597368451236',
						description: 'Product ean'
					},
					{
						displayName: 'Location',
						name: 'location',
						type: 'string',
						default: '',
						placeholder: 'A1-13-7',
						description: 'Product location'
					},
					{
						displayName: 'Warehouse ID',
						name: 'warehouse_id',
						type: 'number',
						default: 0,
						description: 'Product source warehouse identifier. Only applies to products from BaseLinker inventory. By default warehouse_id is determined based on the source of the order.'
					},
					{
						displayName: 'Attributes',
						name: 'attributes',
						type: 'string',
						default: '',
						description: 'Specific product attributes (e.g. "Color: blue")'
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
						description: 'Single item gross price'
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
						description: 'VAT rate'
					},
					{
						displayName: 'Quantity',
						name: 'quantity',
						type: 'number',
						default: 0,
						placeholder: '2',
						description: 'Quantity of pieces'
					},
					{
						displayName: 'Weight',
						name: 'weight',
						type: 'number',
						typeOptions: {
							numberPrecision: 2,
						},
						default: 0,
						placeholder: '1',
						description: 'Single item weight'
					},
				],
			},
		],
		displayOptions: {
			show: {
				category: [
					Category.Orders
				],
				operation: [
					OrdersMethod.AddOrder
				],
			},
		},
	},
];
