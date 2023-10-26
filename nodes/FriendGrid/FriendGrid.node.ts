import {IExecuteFunctions,} from 'n8n-core';

import {IDataObject, INodeExecutionData, INodeType, INodeTypeDescription,} from 'n8n-workflow';

import {Category, ProductCatalogMethod} from "./BaselinkerMethods/types";

import {productCatalogDefinition} from "./BaselinkerMethods/ProductCatalog/product.catalog.definition";
import {productCatalogExecution} from "./BaselinkerMethods/ProductCatalog/product.catalog.execution";
import {externalStoragesDefinition} from "./BaselinkerMethods/ExternalStorages/external.storages.definition";
import {externalStoragesExecution} from "./BaselinkerMethods/ExternalStorages/external.storages.execution";


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
					{
						name: 'External Storages',
						value: Category.ExternalStorages,
					}
				],
				default: Category.ProductCatalog.toString(),
				noDataExpression: true,
				required: true,
				description: 'Create a new contact',
			},
			// Product Catalog
			...productCatalogDefinition,
			// External storages
			...externalStoragesDefinition,
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
				const result = await productCatalogExecution(this, apiKey, operation, category, i);
				responseData.push(result);
				continue;
			}
			// All operation for External Storages category
			if (category === Category.ExternalStorages) {
				const result = await externalStoragesExecution(this, apiKey, operation, category, i);
				responseData.push(result);
				// continue;
			}
		}


		// Map data to n8n data structure
		return [this.helpers.returnJsonArray(responseData)];
	}
}
