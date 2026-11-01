import { render } from "preact";
import "@fontsource-variable/onest";
import "@fontsource-variable/unbounded";
import { startAccount } from "./account.js";
import { App } from "./ui/App.jsx";
import "./styles/main.scss";

startAccount();
render(<App />, document.getElementById("app"));
