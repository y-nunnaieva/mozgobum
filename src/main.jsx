import { render } from "preact";
import "@fontsource-variable/onest";
import "@fontsource-variable/unbounded";
import { App } from "./ui/App.jsx";
import "./styles/main.scss";

render(<App />, document.getElementById("app"));
