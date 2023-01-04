export function timeConverter(UNIX_timestamp) {
	function prependZero(numb) {
		return numb > 9 ? numb : `0${numb}`;
	}
	const a = new Date(UNIX_timestamp * 1000);
	const year = a.getFullYear();
	const month = prependZero(a.getMonth() + 1);
	const day = prependZero(a.getDate());
	const hour = prependZero(a.getHours());
	const min = prependZero(a.getMinutes());
	const sec = prependZero(a.getSeconds());
	const time = `${year}-${month}-${day} ${hour}:${min}:${sec}`;
	return time;
}
