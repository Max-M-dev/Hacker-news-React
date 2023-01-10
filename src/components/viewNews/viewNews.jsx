import { useState, useEffect } from "react";
import useParams from "../../hooks/useParams";
import server from "../../controller/server";
import { timeConverter } from "../../utils/time";
export default function ViewNews(component, props) {
	const params = useParams();
	const [response, setResponse] = useState({});
	useEffect(async () => {
		setResponse({ ...response, status: "loading" });
		await server
			.item(params.newsId)
			.then((res) => res.json())
			.then((res) => {
				res.date = timeConverter(res.time);
				setResponse({ data: res, status: "ok" });
			})
			.catch((error) => {
				setResponse({ ...response, status: "error" });
				console.log(error);
			});
	}, []);
	const propsWithUi = {
		data: response.data,
		dataIsLoading: response.status === "loading",
		dataIsError: response.status === "error",
		dataIsOk: response.status === "ok",
		...props,
	};
	return component(propsWithUi);
}
