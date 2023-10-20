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
				default: 0,
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
				default: 0,
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
				default: 0,
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
				default: 0,
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
				default: 0,
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
			{
				displayName: 'Prices',
				name: 'prices',
				placeholder: 'Add Price',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'A list containing product prices, where the key is the price group ID and value is a product gross price for a given price group. The list of price groups can be retrieved with getInventoryPriceGroups method.',
				options: [
					{
						name: 'metadataValues',
						displayName: 'Metadata',
						values: [
							{
								displayName: 'Price Group ID',
								name: 'name',
								type: 'string',
								default: '',
								description: 'ID of the Price Group',
								placeholder: '105'
							},
							{
								displayName: 'Price Value',
								name: 'value',
								type: 'number',
								typeOptions: {
									numberPrecision: 2,
								},
								default: 0,
								description: 'Value to set for the Price Group ID',
								placeholder: '20.99'
							},
						],
					},
				],
			},
			{
				displayName: 'Stock',
				name: 'stock',
				placeholder: 'Add Stock',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'A list containing product stocks, where the key is the warehouse ID and value is a product stock for a given warehouse. Warehouse ID should have this format: "bl_[ID:int]" (eg. "bl_123").The list of warehouse IDs can be retrieved with getInventoryWarehouses method. Stocks cannot be assigned to the warehouses created automatically for purposes of keeping external stocks (shops, wholesalers, etc.).',
				options: [
					{
						name: 'metadataValues',
						displayName: 'Metadata',
						values: [
							{
								displayName: 'Warehouse ID',
								name: 'name',
								type: 'string',
								default: '',
								description: 'ID of the Warehouse',
								placeholder: 'bl_206'
							},
							{
								displayName: 'Product Stock',
								name: 'value',
								type: 'number',
								default: 0,
								description: 'Value is a product stock for a given warehouse',
								placeholder: '5'
							},
						],
					},
				],
			},
			{
				displayName: 'Locations',
				name: 'locations',
				placeholder: 'Add Location',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'A list containing product locations where the key is the warehouse ID and value is a product location for a given warehouse, eg. "A-5-2". Warehouse ID should have this format: "[type:bl|shop|warehouse]_[ID:int]" (eg. "bl_123"). The list of warehouse IDs can be retrieved with getInventoryWarehouses method.',
				options: [
					{
						name: 'metadataValues',
						displayName: 'Metadata',
						values: [
							{
								displayName: 'Warehouse ID',
								name: 'name',
								type: 'string',
								default: '',
								description: 'ID of the Warehouse',
								placeholder: 'bl_206'
							},
							{
								displayName: 'Product Location',
								name: 'value',
								type: 'string',
								default: '',
								description: 'Value is a product location for a given warehouse',
								placeholder: 'A-5-2'
							},
						],
					},
				],
			},
			// do poprawy
			{
				displayName: 'Text Fields',
				name: 'text_fields',
				type: 'string',
				default: '',
				placeholder: 'text field',
				description: 'Text field description',
			},
			// content to 2mb...
			{
				displayName: 'Images',
				name: 'images',
				placeholder: 'Add Image',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				description: 'A list of product images (maximum 16). Each element of the list is a separate photo where the key is the photo position in the gallery (numbering from 0 to 15). You can delete a photo by sending "" at the selected position. You can submit a photo in binary format, or a link to the photo. In case of binary format, the photo should be coded in base64 and at the very beginning of the photo string the prefix "data:" should be provided. In case of link to the photo, the prefix "url:" must be given before the link. Example:\n' +
					'{\n' +
					'    "0": "url:http://adres.pl/zdjecie.jpg", (url - the photo url limited to 1000 characters length)\n' +
					'    "3": "data:4AAQSkZJRgABA[...]", (binary - the photo content limited to 2MB)\n' +
					'    "5": "", (empty - to delete the photo)\n' +
					'     ...\n' +
					'}',
				options: [
					{
						name: 'metadataValues',
						displayName: 'Metadata',
						values: [
							{
								displayName: 'Photo Position in the Gallery',
								name: 'name',
								type: 'string',
								default: '',
								description: 'The photo position in the gallery (numbering from 0 to 15)',
								placeholder: '0'
							},
							{
								displayName: 'Photo Link',
								name: 'value',
								type: 'string',
								default: '',
								description: 'You can submit a photo in binary format, or a link to the photo. In case of binary format, the photo should be coded in base64 and at the very beginning of the photo string the prefix "data:" should be provided. In case of link to the photo, the prefix "URL:" must be given before the link.',
								placeholder: 'url:http://adres.pl/zdjecie.jpg'
							},
						],
					},
				],
			},
			// do poprawy
			{
				displayName: 'Links',
				name: 'links',
				type: 'string',
				default:'',
				placeholder: 'link',
				description: 'Link description',
			},
		],
	},
]



