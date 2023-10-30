import {INodeProperties} from "n8n-workflow";
import {Resource, CourierShipmentsMethod} from "../types";

import {createPackageDefinition} from "./CreatePackage/definition";

export const courierShipmentsDefinition: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					Resource.CourierShipments
				],
			},
		},
		options: [
			// Courier Shipments
			{
				name: 'Create Package',
				value: CourierShipmentsMethod.CreatePackage,
				description: 'The method allows you to create a shipment in the system of the selected courier',
				action: 'Create a shipment in the system of the selected courier',
			},
		],
		// default: OrdersMethod.GetOrders.toString(),
		default: '',
		noDataExpression: true,
	},
	...createPackageDefinition,
];
