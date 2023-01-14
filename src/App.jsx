import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Layout } from "antd";
import Home from "./page/home";
import ViewNews from "./page/viewNews";
const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Header>
            <div className="title">Hacker New </div>
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
      </Provider>
    </Router>
  );
}

export default App;
