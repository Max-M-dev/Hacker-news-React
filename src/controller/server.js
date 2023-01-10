import { getItem, getItems, getNewStories } from "../api";
const server = {
	async item(id) {
		return await getItem(id);
	},
	async items(ids) {
		return await getItems(ids);
	},
	async newStories(limitItems) {
		return await getNewStories(limitItems);
	},
};

export default server;
