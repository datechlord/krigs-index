import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro";

import LoginPage from "pages/Login.js";
import ComponentRenderer from "ComponentRenderer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function App() {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/Login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}