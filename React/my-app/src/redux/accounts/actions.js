import { checkUser, newUser } from "../../service/accounts";

export const actions = {
  NEW_USER_SUCCESS: "NEW_USER_SUCCESS",
  NEW_USER_FAILURE: "NEW_USER_FAILURE",
  CHECK_USER_SUCCESS: "CHECK_USER_SUCCESS",
  CHECK_USER_FAILURE: "CHECK_USER_FAILURE"
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
      }
    } catch (e) {
      dispatch({
        type: actions.CHECK_USER_FAILURE,
        payload: { error: 1 }
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
          type: actions.NEW_USER_SUCCESS,
          payload: { error: 0 }
        });
      }
    } catch (e) {
      dispatch({
        type: actions.NEW_USER_FAILURE,
        payload: { error: 1 }
      });
    }
  };
};
