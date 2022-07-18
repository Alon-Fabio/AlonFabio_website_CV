import { createRoot } from "react-dom/client";
import "./styles/scss/index.scss";
import App from "./App";
import ModalBase from "./components/Modals/ModalBase/ModalBase";
import reportWebVitals from "./reportWebVitals";
// import { registerRoute } from "workbox-routing";
// import { CacheFirst } from "workbox-strategies";

// registerRoute(
//   "/",
//   new CacheFirst({
//     cacheName: "AlonFabioCache",
//   })
// );
/* @ts-ignore */
const root = createRoot(document.getElementById("root"));
root.render(<App />);

/* @ts-ignore */
const modalRoot = createRoot(document.getElementById("modal-root"));
/* TS wants to add future dependencies */
/* @ts-ignore */
modalRoot.render(<ModalBase />);

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
