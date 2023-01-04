import { Layout } from "antd";
import server from "./controller/server";
import { useEffect, useState } from "react";
import NewStory from "./component/newStory/";
const { Header, Content, Footer } = Layout;

function App() {
	const [rest, setRest] = useState("Loaded");
	useEffect(() => {
		const request = async () => {
			const response = await server.item(123456);
			const res = await response.text();
			console.log(res);
			setRest(res);
		};
		request();
	}, []);
	return (
		<Layout>
			<Header>
				<div className="title">Hacker New</div>
			</Header>
			<Content className="content">
				<NewStory />
			</Content>
			<Footer>Footer</Footer>
		</Layout>
	);
}

export default App;
