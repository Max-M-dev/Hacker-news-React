import Cache from "./cache";

export default class CacheLocalStorage extends Cache {
	constructor(nameCache) {
		super(nameCache);
		this.init();
		return this;
	}
	init() {
		this.readCache();
	}
	saveCache() {
		localStorage.setItem(this.nameCache, JSON.stringify(this.listItems));
	}
	readCache() {
		localStorage.getItem(this.nameCache);
	}
}
