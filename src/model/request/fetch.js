export default async function requestFetch(url, params = {}) {
	const res = await fetch(url, params);
	return await res;
}
