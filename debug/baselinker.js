async function makeBaselinkerRequest(args) {

	const params = new URLSearchParams()
	params.set("method", args.methodName);
	if (args.input != null) {
		params.set("parameters", JSON.stringify(args.input));
	}

	const headers = new Headers();
	headers.set("X-BLToken", args.apiKey);
	headers.set("content-type", "application/x-www-form-urlencoded");

	let response = await fetch('https://api.baselinker.com/connector.php', {
		headers: headers,
		method: 'POST',
		body: params.toString()
	});

	return {
		status: 200,
		body: await response.json(),
	}
}

makeBaselinkerRequest({
	apiKey: "4011857-4033054-DENFXMSA71V13TZ9TGMCGU95OYFG3IB8EY04Q6CZJEDESDKSFFMIJ627B3IPA4ON",
	methodName: "getInventories",
}).then(result => {
	makeBaselinkerRequest({
		apiKey: "4011857-4033054-DENFXMSA71V13TZ9TGMCGU95OYFG3IB8EY04Q6CZJEDESDKSFFMIJ627B3IPA4ON",
		methodName: "getInventoryProductsList",
		input: {
			"inventory_id": result.body.inventories[0].inventory_id,
		},
	}).then(result => {
		console.log(JSON.stringify(result))
	})
})


