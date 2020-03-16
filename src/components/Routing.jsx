import React from "react";
//redux
import { Provider } from "react-redux";
import store from "../store";
//routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import NavMain from "./navbar/navMain";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

const Routing = props => {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={NavMain} />
        <Switch>
          <Route path="/landingpage" component={LandingPage} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </Provider>
  );
};

export default Routing;
