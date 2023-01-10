import Cache from "./cache";

export default class CacheFs extends Cache {
	path = "./files/";
	constructor(nameCache) {
		super(nameCache);
		return async () => {
			await this.init();
			return this;
		};
	}
	async init() {
		const dataJson = await this.readCache();
		this.listItems = JSON.parse(dataJson);
	}

	saveCache() {}
	readCache() {}
}
