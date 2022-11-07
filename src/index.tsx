import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/scss/index.scss";
import App from "./App";
import ModalBase from "./components/Modals/ModalBase/ModalBase";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");
const modalRoot = document.getElementById("modal-root");
if (!root || !modalRoot) throw new Error("Failed to find the root element");
const bindRoot = createRoot(root);
const bindModalRoot = createRoot(modalRoot);
bindRoot.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
bindModalRoot.render(
  <ModalBase setShowModal={() => {}} showModal={false} children={<></>} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// React v17

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     {/* TS wants to add future dependencies */}
//     {/* @ts-ignore */}
//     <ModalBase />
//   </React.StrictMode>,
//   document.getElementById("modal-root")
// );
