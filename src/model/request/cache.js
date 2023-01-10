import { CacheLocalStorage } from "../cache";
import requestFetch from "./fetch";

const cache = new CacheLocalStorage("response");

export default new Proxy(requestFetch, {
	apply: async function (func, thisArg, args) {
		if (cache.has(args[0])) {
			console.log("I have cache. Return cache");
			return cache.get(args[0]);
		} else {
			console.log("I not have cache. Get request");
			const responseText = await func
				.apply(thisArg, args)
				.then((res) => res.text());
			const fakeFetchResponse = {
				text: () => Promise.resolve(responseText),
				json: () => Promise.resolve(JSON.parse(responseText)),
				ok: true,
			};
			cache.set(args[0], fakeFetchResponse);
			return fakeFetchResponse;
		}
	},
});
