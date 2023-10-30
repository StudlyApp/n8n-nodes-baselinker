import {IExecuteFunctions,} from 'n8n-core';

import {IDataObject, INodeExecutionData, INodeType, INodeTypeDescription,} from 'n8n-workflow';

import {Resource, ProductCatalogMethod} from "./BaselinkerMethods/types";

import {productCatalogDefinition} from "./BaselinkerMethods/ProductCatalog/product.catalog.definition";
import {productCatalogExecution} from "./BaselinkerMethods/ProductCatalog/product.catalog.execution";
import {externalStoragesDefinition} from "./BaselinkerMethods/ExternalStorages/external.storages.definition";
import {externalStoragesExecution} from "./BaselinkerMethods/ExternalStorages/external.storages.execution";
import {ordersDefinition} from "./BaselinkerMethods/Orders/orders.definition";
import {ordersExecution} from "./BaselinkerMethods/Orders/orders.execution";
import {courierShipmentsDefinition} from "./BaselinkerMethods/CourierShipments/courier.shipments.definition";
import {courierShipmentsExecution} from "./BaselinkerMethods/CourierShipments/courier.shipments.execution";


export class FriendGrid implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'Baselinker',
		name: 'friendGrid',
		// eslint-disable-next-line n8n-nodes-base/node-class-description-icon-not-svg
		icon: 'file:baseLinker.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Sends data to Baselinker',
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
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Product Catalog',
						value: Resource.ProductCatalog,
					},
					{
						name: 'External Storage',
						value: Resource.ExternalStorages,
					},
					{
						name: 'Order',
						value: Resource.Orders,
					},
					{
						name: 'Courier Shipment',
						value: Resource.CourierShipments,
					}
				],
				default: Resource.ProductCatalog.toString(),
				noDataExpression: true,
				required: true,
				description: 'Create a new contact',
			},
			// Product Catalog
			...productCatalogDefinition,
			// External storages
			...externalStoragesDefinition,
			// Orders
			...ordersDefinition,
			// Courier shipments
			...courierShipmentsDefinition
		],
	};
	// The execute method will go here
	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		// Handle data coming from previous nodes
		const items = this.getInputData();
		const resource: Resource = this.getNodeParameter('resource', 0) as Resource;
		const operation: ProductCatalogMethod = this.getNodeParameter('operation', 0) as ProductCatalogMethod;

		const credentials = await this.getCredentials('baselinkerApi') as IDataObject;
		const apiKey = credentials.apiKey as string;
		let responseData: IDataObject[] = [];

		// For each item, make an API call to create a contact
		for (let i = 0; i < items.length; i++) {
			console.log(resource);
			console.log(operation);
			console.log(items);

			// All operation for Product Catalog resource
			if (resource === Resource.ProductCatalog) {
				const result = await productCatalogExecution(this, apiKey, operation, resource, i);
				responseData.push(result);
				continue;
			}
			// All operation for External Storages resource
			if (resource === Resource.ExternalStorages) {
				const result = await externalStoragesExecution(this, apiKey, operation, resource, i);
				responseData.push(result);
				continue;
			}
			// All operation for Orders resource
			if (resource === Resource.Orders) {
				const result = await ordersExecution(this, apiKey, operation, resource, i);
				responseData.push(result);
				continue;
			}
			// All operation for Courier Shipments category
			if (resource === Resource.CourierShipments) {
				const result = await courierShipmentsExecution(this, apiKey, operation, resource, i);
				responseData.push(result);
			}
		}

		// Map data to n8n data structure
		return [this.helpers.returnJsonArray(responseData)];
	}
}
