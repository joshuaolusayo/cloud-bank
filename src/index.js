import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Component/Home";
import Investment from "./Component/Investment";
import { BrowserRouter, Route } from "react-router-dom";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Route exact path="/" component={Home} />
			<Route exact path="/investment" component={Investment} />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
