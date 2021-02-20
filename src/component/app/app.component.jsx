import React from "react";
import { Router } from "@reach/router";
import { TopMenu } from "../top-menu";
import { LogIn } from "../login";
import { Welcome } from "../welcome";

export const App = () => {
  return (
    <div>
      <h1>NEATA</h1>
      <TopMenu />
      <Router>
        <Welcome path="/" />
        <LogIn path="/auth" />
      </Router>
    </div>
  );
};