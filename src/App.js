import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Home from "./page/home";
import ViewNews from "./page/viewNews";
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
						<Route path="/:newsId">
							<ViewNews />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Content>
			</Layout>
		</Router>
	);
}

export default App;
/* 
import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
} from "react-router-dom";
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "React",
		};
	}

	render() {
		return (
			<Router>
				<AuthRoutingExample />
			</Router>
		);
	}
}

// ======================

class AuthRoutingExample extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
					<ul>
						<li>
							<Link to="/public">Public Page</Link>
						</li>
						<li>
							<Link to="/protected">Protected Page</Link>
						</li>
					</ul>
					<Route path="/public" component={<Public />} />
					<Route path="/login" component={<Login />} />
				</div>
			</div>
		);
	}
}

function Public() {
	return "PUBLIC";
}
function Login() {
	return "Login";
}
 */
