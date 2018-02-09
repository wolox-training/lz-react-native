import { checkUser, newUser, getUser } from "../../service/accounts";

export const actions = {
  NEW_USER_SUCCESS: "NEW_USER_SUCCESS",
  NEW_USER_FAILURE: "NEW_USER_FAILURE",
  CHECK_USER_SUCCESS: "CHECK_USER_SUCCESS",
  CHECK_USER_FAILURE: "CHECK_USER_FAILURE",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  CONNECTION_FAILURE: "CONNECTION_FAILURE"
};

const INVALID_USER = "Invalid User";
const MAIL_IN_USE = "Mail already in use";

export const registerUser = token => {
  return async dispatch => {
    try {
      const response = await getUser(token);
      if (response.status >= 200 && response.status < 300) {
        window.localStorage.userId = response.data.id;
        dispatch({
          type: actions.REGISTER_SUCCESS
        });
      } else {
        dispatch({
          type: actions.CONNECTION_FAILURE
        });
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
      if (response.status >= 200 && response.status < 300) {
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
      if (response.status >= 200 && response.status < 300) {
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
