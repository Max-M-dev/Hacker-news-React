import { useState, useEffect } from "react";
import useParams from "hooks/useParams";
import server from "controller/server";
export default function ViewNews(component, props) {
	const params = useParams();
	console.log(params);
	const [response, setResponse] = useState();
	useEffect(async () => {
		await server
			.item(params.newsId)
			.then((res) => res.json())
			.then(setResponse);
	}, []);
	const propsWithUi = {
		data: response,
		...props,
	};
	return component(propsWithUi);
}
