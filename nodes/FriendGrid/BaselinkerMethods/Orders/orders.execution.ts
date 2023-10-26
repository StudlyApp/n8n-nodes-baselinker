import {IExecuteFunctions} from "n8n-core";
import {OrdersMethod} from "../types";
import zod from "zod";
import {getJournalListExecution} from "./GetJournalList/execution";


export async function ordersExecution(
	data: IExecuteFunctions,
	apiKey: string,
	operation: string,
	category: string,
	i: number,
) {
	if (operation === OrdersMethod.GetJournalList) {
		const schema = zod.object({
			last_log_id: zod.number(),
			logs_types: zod.array(
				zod.number()
			),
			order_id: zod.number().nullish()
		});

		const metadataArraySchema = zod.array(zod.object({
			event_id: zod.number(),
		}))

		const metadataObjectSchema = zod.object({
			metadataValues: metadataArraySchema,
		})

		const logs_types = metadataObjectSchema.parse(data.getNodeParameter('logs_types', i)).metadataValues?.map(el => el.event_id);

		return await getJournalListExecution({
			apiKey: apiKey,
			input: schema.parse({
				last_log_id: data.getNodeParameter('last_log_id', i),
				logs_types,
				order_id: data.getNodeParameter('order_id', i),
			})
		});
	}
}
