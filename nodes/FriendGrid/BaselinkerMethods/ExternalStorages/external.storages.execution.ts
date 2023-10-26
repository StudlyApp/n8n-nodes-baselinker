import {IExecuteFunctions} from "n8n-core";
import {ExternalStoragesMethod} from "../types";
import zod from "zod";

import {getExternalStoragesListExecution} from "./GetExternalStoragesList/execution";
import {getExternalStorageCategoriesExecution} from "./GetExternalStorageCategories/execution";
import {getExternalStorageProductsDataExecution} from "./GetExternalStorageProductsData/execution";

export async function externalStoragesExecution(
	data: IExecuteFunctions,
	apiKey: string,
	operation: string,
	category: string,
	i: number,
) {
	if (operation === ExternalStoragesMethod.GetExternalStoragesList) {
		return await getExternalStoragesListExecution({
			apiKey: apiKey,
		})
	}

	if (operation === ExternalStoragesMethod.GetExternalStorageCategories) {
		const schema = zod.object({
			storage_id: zod.string(),
		});

		return await getExternalStorageCategoriesExecution({
			apiKey: apiKey,
			input: schema.parse({
				storage_id: data.getNodeParameter('storage_id', i)?.toString(),
			})
		});
	}

	// dokonczyc
	if (operation === ExternalStoragesMethod.GetExternalStorageProductsData) {
		const schema = zod.object({
			storage_id: zod.string(),
			products: zod.array(zod.number()),
		});

		console.log(JSON.stringify(data.getNodeParameter('products', i)))

		return await getExternalStorageProductsDataExecution({
			apiKey: apiKey,
			input: schema.parse({
				storage_id: data.getNodeParameter('storage_id', i)?.toString(),
				// products:
			})
		});
	}

}
