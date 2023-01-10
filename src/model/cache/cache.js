export default class Cache {
	nameCache;
	listItems = {};
	constructor(nameCache) {
		if (typeof nameCache !== "string") {
			throw `nameCache is not "string"`;
		}
		this.nameCache = nameCache;
	}

	get(value) {
		return this.listItems[value];
	}
	set(props, value) {
		this.listItems[props] = value;
		this.saveCache();
	}
	has(value) {
		console.log(`value => ${value}`);
		console.log(`keys => ${Object.keys(this.listItems).join(",")}`);
		if (value in this.listItems) {
			return true;
		} else {
			return false;
		}
	}
	saveCache() {
		throw `method not implemented "saveCache"`;
	}
	readCache() {
		throw `method not implemented "readCache"`;
	}
}
