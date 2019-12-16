import React from "react";
import ReactDOM from "react-dom";
import MyToDoApp from "./components/MyToDoApp";

import "../node_modules/normalize.css";
import "../css/todo.scss";

const myAppRoot = document.getElementById("app");

ReactDOM.render(<MyToDoApp />, myAppRoot);

