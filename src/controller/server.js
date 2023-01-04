import { getItem, getNewStories } from "../api";
const server = {
	async item(id) {
		return await getItem(id);
	},
	async newStories() {
		return await getNewStories();
	},
};

export default server;
