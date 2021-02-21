import React from "react";
import { Router } from "@reach/router";
import { TopMenu } from "../top-menu";
import { LogIn } from "../login";
import { Welcome } from "../welcome";
import { Dash } from "../dash";



export const App = () => {
  return (
    <div>
      <h1>HALOOOOOO</h1>
      <TopMenu />
      <Router>
        <Welcome path="/" />
        <LogIn path="/auth" />
        <Dash path="/dash" />
      </Router>
    </div>
  );
};