import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./Login";
import Modal from "react-modal";

Modal.setAppElement("#root");

ReactDOM.render(
  <App />,
  <Login />,
  document.getElementById("root")
);
