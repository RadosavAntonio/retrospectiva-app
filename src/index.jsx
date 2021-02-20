import React from "react";
import { render } from "react-dom";
import { App } from "./component/app";

const app = <App />;
const here = document.querySelector("#here");

render(app, here);
