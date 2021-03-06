import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/root";
import thunk from "../thunk/thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV !== "production") {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

export default (preloadedState = {}) =>
  createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)));
