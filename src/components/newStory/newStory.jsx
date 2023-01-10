import { useState, useCallback, useEffect } from "react";
import server from "../../controller/server";

export default function NewStory(UIComponent, props) {
	const [listNews, setListNews] = useState(null);
	const [spinRefresh, setSpinRefresh] = useState(false);

	const loadListNews = useCallback(async () => {
		setSpinRefresh(true);
		setListNews(() => "loading");
		server
			.newStories(20)
			.then((valuesList) => {
				setListNews(valuesList);
				setSpinRefresh(false);
				return valuesList;
			})
			.then(console.log);
	}, []);

	useEffect(() => {
		// First boot
		loadListNews();
		const idInterval = setInterval(() => {
			console.log("Run Interval");
			loadListNews();
		}, 1000 * 180);
		return () => clearInterval(idInterval);
	}, []);

	const propsForUi = {
		reloadDataList: loadListNews,
		listNews,
		spinRefresh,
		...props,
	};
	return UIComponent(propsForUi);
}
