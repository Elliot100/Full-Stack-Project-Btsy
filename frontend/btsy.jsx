import React from "react";
import ReactDOM from "react-dom";
// import createStore from "./store/store";
// import Root from "./components/root";

const Root = () => (
  <h2>Root Comp</h2>
);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // let preloadedState = undefined;
  // if (window.currentUser) {
  //   preloadedState = {
  //     session: {
  //       currentUser: window.currentUser,
  //     },
  //   };
  // }
  // const store = createStore(preloadedState);
  // const store = createStore();

  ReactDOM.render(<Root />, root);
});
