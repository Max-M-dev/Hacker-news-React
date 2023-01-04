import { linkWithVersion } from "./config";
import request from "../controller/request";
import { timeConverter } from "../utils/time";

export async function getItem(id) {
	const response = await request(`${linkWithVersion}item/${id}/.json`);
	return response;
}

export async function getNewStoriesIds() {
	return await request(`${linkWithVersion}newstories.json`);
}

export async function getNewStories(limit = 5) {
	if (!(typeof limit === "number")) {
		throw new Error("getNewStories args 'limit' is not number");
	}

	let listIdNewStories = await getNewStoriesIds().then((response) =>
		response.json()
	);
	if (limit > 0) {
		listIdNewStories = listIdNewStories.slice(0, limit);
	}

	const promiseRequestListId = listIdNewStories.map((id) => getItem(id));

	const listPromiseFulfilled = await Promise.allSettled(promiseRequestListId)
		.then((responseAll) =>
			responseAll.filter((response) => response.status === "fulfilled")
		)
		.then((fulfilledList) =>
			fulfilledList.map((response) => response.value.json())
		);
	const listValuesNews = Promise.allSettled(listPromiseFulfilled).then((list) =>
		list.map((data) => {
			data.value.date = timeConverter(data.value.time);
			return data.value;
		})
	);
	return listValuesNews;
}

export async function getMaxItemId() {
	return await request(`${linkWithVersion}maxitem.json`);
}
