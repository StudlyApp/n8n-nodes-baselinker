import {INodeProperties} from "n8n-workflow";
import {Category, ExternalStoragesMethod} from "../types";

import {getExternalStoragesListDefinition} from "./GetExternalStoragesList/definition";
import {getExternalStorageCategoriesDefinition} from "./GetExternalStorageCategories/definition";
import {getExternalStorageProductsDataDefinition} from "./GetExternalStorageProductsData/definition";

export const externalStoragesDefinition: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				category: [
					Category.ExternalStorages
				],
			},
		},
		options: [
			// External Storages
			{
				name: 'Get External Storages List',
				value: ExternalStoragesMethod.GetExternalStoragesList,
				description: 'The method allows you to retrieve a list of available external storages (shops, wholesalers) that can be referenced via API',
				action: 'Get external storages list',
			},
			{
				name: 'Get External Storage Categories',
				value: ExternalStoragesMethod.GetExternalStorageCategories,
				description: 'The method allows you to retrieve a category list from an external storage (shop/wholesale) connected to BaseLinker',
				action: 'Get category list from an external storage',
			},
			{
				name: 'Get External Storage Products Data',
				value: ExternalStoragesMethod.GetExternalStorageProductsData,
				description: 'The method allows to retrieve detailed data of selected products from an external storage (shop/wholesaler) connected to BaseLinker',
				action: 'Get detailed data of selected products from an external storage',
			},
		],
		default: ExternalStoragesMethod.GetExternalStorageProductsList.toString(),
		noDataExpression: true,
	},
	...getExternalStoragesListDefinition,
	...getExternalStorageCategoriesDefinition,
	...getExternalStorageProductsDataDefinition,
];
