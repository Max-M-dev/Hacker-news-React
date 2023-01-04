import { Layout } from "antd";
import NewStory from "./component/newStory/";

const { Header, Content } = Layout;

function App() {
	return (
		<Layout>
			<Header>
				<div className="title">Hacker New</div>
			</Header>
			<Content className="content">
				<NewStory />
			</Content>
		</Layout>
	);
}

export default App;
