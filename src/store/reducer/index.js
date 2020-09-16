import { combineReducers } from "@reduxjs/toolkit";

// import sub reducers
import searchReducer from "./search";
import uiReducer from "./ui";
import loginReducer from "./login";

// re-export all actions from submodules
export * from "./search";
export * from "./ui";
export * from "./login";

// create root reducer including all sub reducers
export const rootReducer = combineReducers({
  search: searchReducer,
  ui: uiReducer,
  login: loginReducer,
});
