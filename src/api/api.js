import { linkWithVersion } from "./config";
import request from "../controller/request";

async function getItem(id) {
	const response = await request(`${linkWithVersion}item/${id}/.json`);
	return response;
}

async function getNewStories() {
	return await request(`${linkWithVersion}newstories.json`);
}
export { getItem, getNewStories };
