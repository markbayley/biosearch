import { createAction, createReducer } from "@reduxjs/toolkit";

export const checkLoginStatusAction = createAction("CHECK_LOGIN_STATUS");
export const checkLoginStatusStartAction = createAction("CHECK_LOGIN_STATUS_START");
export const checkLoginStatusStopAction = createAction("CHECK_LOGIN_STATUS_STOP");
export const checkLoginStatusSuccessAction = createAction("CHECK_LOGIN_STATUS_SUCCESS");

const initialLoginState = {
  checking: false,
  user: null,
};

const loginReducer = createReducer(initialLoginState, {
  [checkLoginStatusAction]: (state, action) => {
    state.checking = action.payload;
  },
  [checkLoginStatusSuccessAction]: (state, action) => {
    state.user = action.payload;
  },
});

export default loginReducer;
