import { combineReducers } from "@reduxjs/toolkit";

// import sub reducers
import searchReducer from "./search";
import uiReducer from "./ui";
import loginReducer from "./login";

// re-export all actions from submodules
export * from "./search";
export * from "./ui";
export * from "./login";

// function to create root reducer including redux-first-history reducer and all our sub reducers
export const createRootReducer = (routerReducer) => combineReducers({
  router: routerReducer,
  search: searchReducer,
  ui: uiReducer,
  login: loginReducer,
});
