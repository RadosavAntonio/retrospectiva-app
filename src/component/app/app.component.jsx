import React from "react";
import { Router } from "@reach/router";
import { Home } from "../home";
import { Login } from "../login";
import { TopMenu } from "../topmenu";
import { Dash } from "../dash";

export const App = () => {
  return (
    <div>
      <h1>My Retrospective</h1>
      <TopMenu />
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Dash path="/dash" />
      </Router>
    </div>
  );
};
