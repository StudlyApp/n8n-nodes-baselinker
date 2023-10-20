import zod from 'zod';

import {IExecuteFunctions,} from 'n8n-core';

import {IDataObject, INodeExecutionData, INodeType, INodeTypeDescription,} from 'n8n-workflow';

import {Category, ProductCatalogMethod} from "./BaselinkerMethods/types";

import {getInventoriesDefinition} from "./BaselinkerMethods/ProductCatalog/GetInventories/definition";
import {
	getInventoryProductsListDefinition
} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductsList/definition";
import {addInventoryPriceGroupDefinition} from "./BaselinkerMethods/ProductCatalog/AddInventoryPriceGroup/definition";
import {getInventoriesExecution} from "./BaselinkerMethods/ProductCatalog/GetInventories/execution";
import {getInventoryProductsListExecution} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductsList/execution";
import {
	deleteInventoryPriceGroupDefinition
} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryPriceGroup/definition";
import {
	deleteInventoryPriceGroupExecution
} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryPriceGroup/execution";
import {addInventoryPriceGroupExecution} from "./BaselinkerMethods/ProductCatalog/AddInventoryPriceGroup/execution";
import {getInventoryPriceGroupsDefinition} from "./BaselinkerMethods/ProductCatalog/GetInventoryPriceGroups/definition";
import {getInventoryPriceGroupsExecution} from "./BaselinkerMethods/ProductCatalog/GetInventoryPriceGroups/execution";
import {addInventoryWarehouseDefinition} from "./BaselinkerMethods/ProductCatalog/AddInventoryWarehouse/definition";
import {addInventoryWarehouseExecution} from "./BaselinkerMethods/ProductCatalog/AddInventoryWarehouse/execution";
import {
	deleteInventoryWarehouseDefinition
} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryWarehouse/definition";
import {deleteInventoryWarehouseExecution} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryWarehouse/execution";
import {getInventoryWarehousesDefinition} from "./BaselinkerMethods/ProductCatalog/GetInventoryWarehouses/definition";
import {getInventoryWarehousesExecution} from "./BaselinkerMethods/ProductCatalog/GetInventoryWarehouses/execution";
import {addInventoryDefinition} from "./BaselinkerMethods/ProductCatalog/AddInventory/definition";
import {addInventoryExecution} from "./BaselinkerMethods/ProductCatalog/AddInventory/execution";
import {deleteInventoryDefinition} from "./BaselinkerMethods/ProductCatalog/DeleteInventory/definition";
import {deleteInventoryExecution} from "./BaselinkerMethods/ProductCatalog/DeleteInventory/execution";
import {addInventoryCategoryDefinition} from "./BaselinkerMethods/ProductCatalog/AddInventoryCategory/definition";
import {addInventoryCategoryExecution} from "./BaselinkerMethods/ProductCatalog/AddInventoryCategory/execution";
import {deleteInventoryCategoryDefinition} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryCategory/definition";
import {deleteInventoryCategoryExecution} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryCategory/execution";
import {getInventoryCategoriesDefinition} from "./BaselinkerMethods/ProductCatalog/GetInventoryCategories/definition";
import {getInventoryCategoriesExecution} from "./BaselinkerMethods/ProductCatalog/GetInventoryCategories/execution";
import {
	addInventoryManufacturerDefinition
} from "./BaselinkerMethods/ProductCatalog/AddInventoryManufacturer/definition";
import {addInventoryManufacturerExecution} from "./BaselinkerMethods/ProductCatalog/AddInventoryManufacturer/execution";
import {
	deleteInventoryManufacturerDefinition
} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryManufacturer/definition";
import {
	deleteInventoryManufacturerExecution
} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryManufacturer/execution";
import {
	getInventoryManufacturersDefinition
} from "./BaselinkerMethods/ProductCatalog/GetInventoryManufacturers/definition";
import {
	getInventoryManufacturersExecution
} from "./BaselinkerMethods/ProductCatalog/GetInventoryManufacturers/execution";
import {getInventoryExtraFieldsDefinition} from "./BaselinkerMethods/ProductCatalog/GetInventoryExtraFields/definition";
import {getInventoryExtraFieldsExecution} from "./BaselinkerMethods/ProductCatalog/GetInventoryExtraFields/execution";
import {
	getInventoryIntegrationsDefinition
} from "./BaselinkerMethods/ProductCatalog/GetInventoryIntegrations/definition";
import {getInventoryIntegrationsExecution} from "./BaselinkerMethods/ProductCatalog/GetInventoryIntegrations/execution";
import {
	getInventoryAvailableTextFieldKeysDefinition
} from "./BaselinkerMethods/ProductCatalog/GetInventoryAvailableTextFieldKeys/definition";
import {
	getInventoryAvailableTextFieldKeysExecution
} from "./BaselinkerMethods/ProductCatalog/GetInventoryAvailableTextFieldKeys/execution";
import {deleteInventoryProductDefinition} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryProduct/definition";
import {deleteInventoryProductExecution} from "./BaselinkerMethods/ProductCatalog/DeleteInventoryProduct/execution";
import {
	getInventoryProductsStockDefinition
} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductsStock/definition";
import {
	getInventoryProductsStockExecution
} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductsStock/execution";
import {
	getInventoryProductsPricesDefinition
} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductsPrices/definition";
import {
	getInventoryProductsPricesExecution
} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductsPrices/execution";
import {getInventoryProductLogsDefinition} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductLogs/definition";
import {getInventoryProductLogsExecution} from "./BaselinkerMethods/ProductCatalog/GetInventoryProductLogs/execution";
import {runProductMacroTriggerDefinition} from "./BaselinkerMethods/ProductCatalog/RunProductMacroTrigger/definition";
import {runProductMacroTriggerExecution} from "./BaselinkerMethods/ProductCatalog/RunProductMacroTrigger/execution";


export class FriendGrid implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'FriendGrid',
		name: 'friendGrid',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:baseLinker.png',
		group: ['transform'],
		version: 1,
		description: 'Consume SendGrid API',
		defaults: {
			name: 'FriendGrid',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'baselinkerApi',
				required: true,
			},
		],
		properties: [
			// Resources and operations will go here
			{
				displayName: 'Category',
				name: 'category',
				type: 'options',
				options: [
					{
						name: 'Product Catalog',
						value: Category.ProductCatalog,
					},
				],
				default: Category.ProductCatalog.toString(),
				noDataExpression: true,
				required: true,
				description: 'Create a new contact',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						category: [
							Category.ProductCatalog
						],
					},
				},
				options: [
					// Product catalog
					{
						name: 'Add Inventory Price Group',
						value: ProductCatalogMethod.AddInventoryPriceGroup,
						description: 'The method allows to create a price group in BaseLinker storage. Providing a price group ID will update the existing price group. Such price groups may be later assigned in addInventory method.',
						action: 'Add or updated price group in inventory',
					},
					{
						name: 'Delete Inventory Price Group',
						value: ProductCatalogMethod.DeleteInventoryPriceGroup,
						description: 'The method allows you to remove the price group from BaseLinker storage',
						action: 'Remove the price group from inventory',
					},
					{
						name: 'Get Inventory Price Groups',
						value: ProductCatalogMethod.GetInventoryPriceGroups,
						description: 'The method allows to retrieve price groups existing in BaseLinker storage',
						action: 'Gets list of price groups',
					},
					{
						name: 'Add Inventory Warehouse',
						value: ProductCatalogMethod.AddInventoryWarehouse,
						description: 'The method allows you to add a new warehouse available in BaseLinker catalogues. Adding a warehouse with the same identifier again will cause updates of the previously saved warehouse. The method does not allow editing warehouses created automatically for the purpose of keeping external stocks of shops, wholesalers etc. Such warehouse may be later used in addInventory method.',
						action: 'Add or updated warehouse in catalogues',
					},
					{
						name: 'Delete Inventory Warehouse',
						value: ProductCatalogMethod.DeleteInventoryWarehouse,
						description: 'The method allows you to remove the warehouse available in BaseLinker catalogues. The method does not allow to remove warehouses created automatically for the purpose of keeping external stocks of shops, wholesalers etc.',
						action: 'Remove the warehouse from catalogues',
					},
					{
						name: 'Get Inventory Warehouses',
						value: ProductCatalogMethod.GetInventoryWarehouses,
						description: 'The method allows you to retrieve a list of warehouses available in BaseLinker catalogues. The method also returns information about the warehouses created automatically for the purpose of keeping external stocks (shops, wholesalers etc.).',
						action: 'Gets list of warehouses',
					},
					{
						name: 'Add Inventory',
						value: ProductCatalogMethod.AddInventory,
						description: 'The method allows you to add the BaseLinker catalogs. Adding a catalog with the same identifier again will cause updates of the previously saved catalog.',
						action: 'Add or updated the catalogs',
					},
					{
						name: 'Delete Inventory',
						value: ProductCatalogMethod.DeleteInventory,
						description: 'The method allows you to delete a catalog from BaseLinker storage',
						action: 'Remove the catalog from storage',
					},
					{
						name: 'Get Inventories',
						value: ProductCatalogMethod.GetInventories,
						description: 'The method allows you to retrieve a list of catalogs available in the BaseLinker storage',
						action: 'Gets list of inventories id',
					},
					{
						name: 'Add Inventory Category',
						value: ProductCatalogMethod.AddInventoryCategory,
						description: 'The method allows you to add a category to the BaseLinker catalog. Adding a category with the same identifier again, updates the previously saved category.',
						action: 'Add or updated category in catalog',
					},
					{
						name: 'Delete Inventory Category',
						value: ProductCatalogMethod.DeleteInventoryCategory,
						description: 'The method allows you to remove categories from BaseLinker warehouse. Along with the category, the products contained therein are removed (however, this does not apply to products in subcategories). The subcategories will be changed to the highest level categories.',
						action: 'Remove the category from warehouse',
					},
					{
						name: 'Get Inventory Categories',
						value: ProductCatalogMethod.GetInventoryCategories,
						description: 'The method allows you to retrieve a list of categories for a BaseLinker catalog',
						action: 'Gets list of categories for catalog',
					},
					{
						name: 'Add Inventory Manufacturer',
						value: ProductCatalogMethod.AddInventoryManufacturer,
						description: 'The method allows you to add a manufacturer to the BaseLinker catalog. Adding a manufacturer with the same identifier again, updates the previously saved manufacturer.',
						action: 'Add or updated manufacturer in catalog',
					},
					{
						name: 'Delete Inventory Manufacturer',
						value: ProductCatalogMethod.DeleteInventoryManufacturer,
						description: 'The method allows you to remove manufacturer from BaseLinker catalog',
						action: 'Remove the manufacturer from catalog',
					},
					{
						name: 'Get Inventory Manufacturers',
						value: ProductCatalogMethod.GetInventoryManufacturers,
						description: 'The method allows you to retrieve a list of manufacturers for a BaseLinker catalog',
						action: 'Gets list of manufacturers for catalog',
					},
					{
						name: 'Get Inventory Extra Fields',
						value: ProductCatalogMethod.GetInventoryExtraFields,
						description: 'The method allows you to retrieve a list of extra fields for a BaseLinker catalog',
						action: 'Gets list of extra fields for catalog',
					},
					{
						name: 'Get Inventory Integrations',
						value: ProductCatalogMethod.GetInventoryIntegrations,
						description: 'The method returns a list of integrations where text values in the catalog can be overwritten. The returned data contains a list of accounts for each integration and a list of languages supported by the integration.',
						action: 'Gets list of integrations',
					},
					{
						name: 'Get Inventory Available Text Field Keys',
						value: ProductCatalogMethod.GetInventoryAvailableTextFieldKeys,
						description: 'The method returns a list of product text fields that can be overwritten for specific integration',
						action: 'Gets list of product text fields',
					},
					{
						name: 'Delete Inventory Product',
						value: ProductCatalogMethod.DeleteInventoryProduct,
						description: 'The method allows you to remove the product from BaseLinker catalog',
						action: 'Remove the product from catalog',
					},
					{
						name: 'Get Inventory Products List',
						value: ProductCatalogMethod.GetInventoryProductsList,
						description: 'Catalog ID. The list of identifiers can be retrieved using the method getInventories.',
						action: 'Gets list of products',
					},
					{
						name: 'Get Inventory Products Stock',
						value: ProductCatalogMethod.GetInventoryProductsStock,
						description: 'The method allows you to retrieve stock data of products from BaseLinker catalogs',
						action: 'Gets stock data of products from catalogs',
					},
					{
						name: 'Get Inventory Products Prices',
						value: ProductCatalogMethod.GetInventoryProductsPrices,
						description: 'The method allows to retrieve the gross prices of products from BaseLinker catalogues',
						action: 'Gets the gross prices of products from catalogs',
					},
					{
						name: 'Get Inventory Product Logs',
						value: ProductCatalogMethod.GetInventoryProductLogs,
						description: 'The method allows to retrieve a list of events related to product change (or their variants) in the BaseLinker catalog',
						action: 'Gets a list of events related to product change in catalog',
					},
					{
						name: 'Run Product Macro Trigger',
						value: ProductCatalogMethod.RunProductMacroTrigger,
						description: 'The method allows you to run personal trigger for products automatic actions',
						action: 'Run personal trigger for products automatic actions',
					}
				],
				default: ProductCatalogMethod.GetInventoryProductsList.toString(),
				noDataExpression: true,
			},
			// Product catalog
			...addInventoryPriceGroupDefinition,
			...deleteInventoryPriceGroupDefinition,
			...getInventoryPriceGroupsDefinition,
			...addInventoryWarehouseDefinition,
			...deleteInventoryWarehouseDefinition,
			...getInventoryWarehousesDefinition,
			...addInventoryDefinition,
			...deleteInventoryDefinition,
			...getInventoriesDefinition,
			...addInventoryCategoryDefinition,
			...deleteInventoryCategoryDefinition,
			...getInventoryCategoriesDefinition,
			...addInventoryManufacturerDefinition,
			...deleteInventoryManufacturerDefinition,
			...getInventoryManufacturersDefinition,
			...getInventoryExtraFieldsDefinition,
			...getInventoryIntegrationsDefinition,
			...getInventoryAvailableTextFieldKeysDefinition,
			...deleteInventoryProductDefinition,
			...getInventoryProductsListDefinition,
			...getInventoryProductsStockDefinition,
			...getInventoryProductsPricesDefinition,
			...getInventoryProductLogsDefinition,
			...runProductMacroTriggerDefinition,
			// External storages

			// Orders

			// Courier shipments

		],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Handle data coming from previous nodes
		const items = this.getInputData();
		const category: Category = this.getNodeParameter('category', 0) as Category;
		const operation: ProductCatalogMethod = this.getNodeParameter('operation', 0) as ProductCatalogMethod;

		const credentials = await this.getCredentials('baselinkerApi') as IDataObject;
		const apiKey = credentials.apiKey as string;
		let responseData: IDataObject[] = [];

		// For each item, make an API call to create a contact
		for (let i = 0; i < items.length; i++) {
			console.log(category);
			console.log(operation);
			console.log(items);

			// All operation for Product Catalog category
			if (category === Category.ProductCatalog) {
				if (operation === ProductCatalogMethod.AddInventoryPriceGroup) {
					const schema = zod.object({
						price_group_id: zod.union([
							zod.number(), zod.null()
						]).optional(),
						name: zod.string(),
						description: zod.string(),
						currency: zod.string(),
					});

					const result = await addInventoryPriceGroupExecution({
						apiKey: apiKey,
						input: schema.parse({
							price_group_id: this.getNodeParameter('price_group_id', i),
							name: this.getNodeParameter('name', i),
							description: this.getNodeParameter('description', i),
							currency: this.getNodeParameter('currency', i),
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.DeleteInventoryPriceGroup) {
					const schema = zod.object({
						price_group_id: zod.number(),
					})

					const result = await deleteInventoryPriceGroupExecution({
						apiKey: apiKey,
						input: schema.parse({
							price_group_id: this.getNodeParameter('price_group_id', i),
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryPriceGroups) {
					const result = await getInventoryPriceGroupsExecution({
						apiKey: apiKey
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.AddInventoryWarehouse) {
					const schema = zod.object({
						warehouse_id: zod.union([
							zod.number(), zod.null()
						]).optional(),
						name: zod.string(),
						description: zod.string(),
						stock_edition: zod.boolean(),
					});

					const result = await addInventoryWarehouseExecution({
						apiKey: apiKey,
						input: schema.parse({
							warehouse_id: this.getNodeParameter('warehouse_id', i),
							name: this.getNodeParameter('name', i),
							description: this.getNodeParameter('description', i),
							stock_edition: this.getNodeParameter('stock_edition', i),
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.DeleteInventoryWarehouse) {
					const schema = zod.object({
						warehouse_id: zod.number(),
					})

					const result = await deleteInventoryWarehouseExecution({
						apiKey: apiKey,
						input: schema.parse({
							warehouse_id: this.getNodeParameter('warehouse_id', i),
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryWarehouses) {
					const result = await getInventoryWarehousesExecution({
						apiKey: apiKey
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.AddInventory) {
					const metadataArraySchema = zod.array(zod.object({
						value: zod.union([
							zod.string(), zod.number()
						])
					}))

					const metadataObjectSchema = zod.object({
						metadataValues: metadataArraySchema.optional(),
					})

					const schema = zod.object({
						// inventory_id: zod.number().optional(),
						inventory_id: zod.union([
							zod.number(), zod.null()
						]).optional(),
						name: zod.string(),
						description: zod.string(),
						languages: zod.array(zod.union([
							zod.string(), zod.number()
						])),
						default_language: zod.string(),
						price_groups: zod.array(zod.union([
							zod.string(), zod.number()
						])),
						default_price_group: zod.number(),
						warehouses: zod.array(zod.union([
							zod.string(), zod.number()
						])),
						default_warehouse: zod.string(),
						reservations: zod.boolean(),
					})

					const languages = metadataObjectSchema.parse(this.getNodeParameter('languages', i)).metadataValues?.map(el => el.value);
					const price_groups = metadataObjectSchema.parse(this.getNodeParameter('price_groups', i)).metadataValues?.map(el => el.value);
					const warehouses = metadataObjectSchema.parse(this.getNodeParameter('warehouses', i)).metadataValues?.map(el => el.value);

					const result = await addInventoryExecution({
						apiKey: apiKey,
						input: schema.parse({
							inventory_id: this.getNodeParameter('inventory_id', i),
							name: this.getNodeParameter('name', i),
							description: this.getNodeParameter('description', i),
							languages,
							default_language: this.getNodeParameter('default_language', i),
							price_groups,
							default_price_group: this.getNodeParameter('default_price_group', i),
							warehouses,
							default_warehouse: this.getNodeParameter('default_warehouse', i),
							reservations: this.getNodeParameter('reservations', i),
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.DeleteInventory) {
					const schema = zod.object({
						inventory_id: zod.number(),
					})

					const result = await deleteInventoryExecution({
						apiKey: apiKey,
						input: schema.parse({
							inventory_id: this.getNodeParameter('inventory_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventories) {
					const result = await getInventoriesExecution({
						apiKey: apiKey
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.AddInventoryCategory) {
					const schema = zod.object({
						inventory_id: zod.number().optional(),
						category_id: zod.number().optional(),
						name: zod.string(),
						parent_id: zod.number(),
					});

					const result = await addInventoryCategoryExecution({
						apiKey: apiKey,
						input: schema.parse({
							inventory_id: this.getNodeParameter('inventory_id', i), // popoprawiac to jutro
							category_id: this.getNodeParameter('category_id', i) as number,
							name: this.getNodeParameter('name', i) as string,
							parent_id: this.getNodeParameter('parent_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.DeleteInventoryCategory) {
					const schema = zod.object({
						category_id: zod.number(),
					})

					const result = await deleteInventoryCategoryExecution({
						apiKey: apiKey,
						input: schema.parse({
							category_id: this.getNodeParameter('category_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryCategories) {
					const schema = zod.object({
						inventory_id: zod.number().optional(),
					})

					const result = await getInventoryCategoriesExecution({
						apiKey: apiKey,
						input: schema.parse({
							inventory_id: this.getNodeParameter('inventory_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.AddInventoryManufacturer) {
					const schema = zod.object({
						manufacturer_id: zod.number().optional(),
						name: zod.string(),
					});

					const result = await addInventoryManufacturerExecution({
						apiKey: apiKey,
						input: schema.parse({
							manufacturer_id: this.getNodeParameter('manufacturer_id', i) as number,
							name: this.getNodeParameter('name', i) as string,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.DeleteInventoryManufacturer) {
					const schema = zod.object({
						manufacturer_id: zod.number(),
					})

					const result = await deleteInventoryManufacturerExecution({
						apiKey: apiKey,
						input: schema.parse({
							manufacturer_id: this.getNodeParameter('manufacturer_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryManufacturers) {
					const result = await getInventoryManufacturersExecution({
						apiKey: apiKey
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryExtraFields) {
					const result = await getInventoryExtraFieldsExecution({
						apiKey: apiKey
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryIntegrations) {
					const schema = zod.object({
						inventory_id: zod.number(),
					})

					const result = await getInventoryIntegrationsExecution({
						apiKey: apiKey,
						input: schema.parse({
							inventory_id: this.getNodeParameter('inventory_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryAvailableTextFieldKeys) {
					const schema = zod.object({
						inventory_id: zod.number(),
					})

					const result = await getInventoryAvailableTextFieldKeysExecution({
						apiKey: apiKey,
						input: schema.parse({
							inventory_id: this.getNodeParameter('inventory_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.DeleteInventoryProduct) {
					const schema = zod.object({
						product_id: zod.number(),
					})

					const result = await deleteInventoryProductExecution({
						apiKey: apiKey,
						input: schema.parse({
							product_id: this.getNodeParameter('product_id', i) as number,
						})
					});

					responseData.push(result);
					continue;
				}

				// tu nie parsujemy blad?
				if (operation === ProductCatalogMethod.GetInventoryProductsList) {
					const schema = zod.object({
						filter_id: zod.number().optional(),
						filter_category_id: zod.number().optional(),
						filter_ean: zod.string().optional(),
						filter_sku: zod.string().optional(),
						filter_name: zod.string().optional(),
						filter_price_from: zod.number().optional(),
						filter_price_to: zod.number().optional(),
						filter_stock_from: zod.number().optional(),
						filter_stock_to: zod.number().optional(),
						page: zod.number().optional(),
						filter_sort: zod.string().optional(),
					});

					const additionalFields = this.getNodeParameter("additionalFields", i);

					const result = await getInventoryProductsListExecution({
						apiKey: apiKey,
						input: {
							inventory_id: this.getNodeParameter('inventory_id', i) as number,
							...schema.parse(additionalFields)
						}
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryProductsStock) {
					const schema = zod.object({
						page: zod.number().optional(),
					});

					const additionalFields = this.getNodeParameter("additionalFields", i);

					const result = await getInventoryProductsStockExecution({
						apiKey: apiKey,
						input: {
							inventory_id: this.getNodeParameter('inventory_id', i) as number,
							...schema.parse(additionalFields)
						}
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryProductsPrices) {
					const schema = zod.object({
						page: zod.number().optional(),
					});

					const additionalFields = this.getNodeParameter("additionalFields", i);

					const result = await getInventoryProductsPricesExecution({
						apiKey: apiKey,
						input: {
							inventory_id: this.getNodeParameter('inventory_id', i) as number,
							...schema.parse(additionalFields)
						}
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.GetInventoryProductLogs) {
					const schema = zod.object({
						date_from: zod.number().optional(),
						date_to: zod.number().optional(),
						log_type: zod.number().optional(),
						sort: zod.number().optional(),
						page: zod.number().optional(),
					});

					const additionalFields = this.getNodeParameter("additionalFields", i);

					const result = await getInventoryProductLogsExecution({
						apiKey: apiKey,
						input: {
							product_id: this.getNodeParameter('product_id', i) as number,
							...schema.parse(additionalFields)
						}
					});

					responseData.push(result);
					continue;
				}

				if (operation === ProductCatalogMethod.RunProductMacroTrigger) {
					const schema = zod.object({
						product_id: zod.number(),
						trigger_id: zod.number(),
					})

					const result = await runProductMacroTriggerExecution({
						apiKey: apiKey,
						input: schema.parse({
							product_id: this.getNodeParameter('product_id', i) as number,
							trigger_id: this.getNodeParameter('product_id', i) as number,
						})
					});

					responseData.push(result);
				}
			}

		// 	if (resource === 'contact') {
		// 		if (operation === 'create') {
		// 			// Get email input
		// 			const email = this.getNodeParameter('email', i) as string;
		// 			// Get additional fields input
		// 			const additionalFields = this.getNodeParameter('additionalFields', i) as IDataObject;
		// 			const data: IDataObject = {
		// 				email,
		// 			};
		//
		// 			Object.assign(data, additionalFields);
		//
		// 			// Make HTTP request according to https://sendgrid.com/docs/api-reference/
		// 			const options: OptionsWithUri = {
		// 				headers: {
		// 					'Accept': 'application/json',
		// 				},
		// 				method: 'PUT',
		// 				body: {
		// 					contacts: [
		// 						data,
		// 					],
		// 				},
		// 				uri: `https://api.sendgrid.com/v3/marketing/contacts`,
		// 				json: true,
		// 			};
		// 			responseData = await this.helpers.requestWithAuthentication.call(this, 'friendGridApi', options);
		// 			returnData.push(responseData);
		// 		}
		// 	}
		}


		// Map data to n8n data structure
		return [this.helpers.returnJsonArray(responseData)];
	}
}
