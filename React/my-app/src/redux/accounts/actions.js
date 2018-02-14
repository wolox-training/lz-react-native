import { checkUser, newUser, getUser } from "../../service/accounts";
import { responseOK } from "../../utils/requestUtils";
import { INVALID_USER, MAIL_IN_USE, CONNECTION_FAILURE } from "../stringErrors";

export const actions = {
  NEW_USER_SUCCESS: "NEW_USER_SUCCESS",
  NEW_USER_FAILURE: "NEW_USER_FAILURE",
  CHECK_USER_SUCCESS: "CHECK_USER_SUCCESS",
  CHECK_USER_FAILURE: "CHECK_USER_FAILURE",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  CONNECTION_FAILURE: "CONNECTION_FAILURE"
};

export const registerUser = token => {
  return async dispatch => {
    try {
      const response = await getUser(token);
      if (responseOK(response)) {
        window.localStorage.userId = response.data.id;
        dispatch({
          type: actions.REGISTER_SUCCESS
        });
      } else {
        throw new Error(CONNECTION_FAILURE);
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        error: e
      });
    }
  };
};

export const verifyUser = body => {
  return async dispatch => {
    try {
      const response = await checkUser(body);
      if (responseOK(response)) {
        dispatch({
          type: actions.CHECK_USER_SUCCESS,
          payload: { token: response.data.access_token }
        });
      } else {
        throw new Error(INVALID_USER);
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        payload: { error: e }
      });
    }
  };
};

export const registerNewUser = body => {
  return async dispatch => {
    try {
      const response = await newUser(body);
      if (responseOK(response)) {
        dispatch({
          type: actions.NEW_USER_SUCCESS
        });
      } else {
        throw new Error(MAIL_IN_USE);
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        payload: { error: e }
      });
    }
  };
};
