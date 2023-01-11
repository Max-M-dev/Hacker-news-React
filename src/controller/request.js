import requestFetch from "../model/request/fetch";
import cacheRequest from "../model/request/cache";

export default async function request(url, params = {}) {
  if (import.meta.env?.VITE_CACHE_REQUEST) {
    return await cacheRequest(url, params);
  } else {
    return await requestFetch(url, params);
  }
}
