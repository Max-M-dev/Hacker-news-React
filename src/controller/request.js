// import fetch from "node-fetch";
export default async function request(url, params = {}) {
	const res = await fetch(url, params);
	return await res;
}
