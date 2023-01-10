import requestFetch from "../model/request/fetch";
import cacheRequest from "../model/request/cache";

export default async function request(url, params = {}) {
	return await cacheRequest(url, params);
}
