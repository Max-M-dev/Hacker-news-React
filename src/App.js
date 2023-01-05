import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import NewStory from "./component/newStory/";

const { Header, Content } = Layout;

function App() {
	return (
		<Router>
			<Layout>
				<Header>
					<div className="title">Hacker New</div>
				</Header>
				<Content className="content">
					<Switch>
						<Route path="/">
							<NewStory />
						</Route>
					</Switch>
				</Content>
			</Layout>
		</Router>
	);
}

export default App;
