import React from "react";
import { Router } from "@reach/router";
import { Home } from "../home";
import { Login } from "../login/login.component";
import { TopMenu } from "../topmenu/topmenu.component";

export const App = () => {
  return (
    <div>
      <h1>My Retrospective</h1>
      <TopMenu />
      <Router>
        <Home path="/" />
        <Login path="/login" />
      </Router>
    </div>
  );
};
