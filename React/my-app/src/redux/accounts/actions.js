import {
  checkUser,
  newUser,
  getUser,
  getUserRents,
  getUserComments,
  getUserWishlist,
  getProfileInfo
} from "../../service/accounts";
import { responseOK } from "../../utils/requestUtils";
import { INVALID_USER, MAIL_IN_USE, CONNECTION_FAILURE } from "../stringErrors";

export const actions = {
  CHECK_USER_FAILURE: "CHECK_USER_FAILURE",
  CHECK_USER_SUCCESS: "CHECK_USER_SUCCESS",
  CONNECTION_FAILURE: "CONNECTION_FAILURE",
  GET_INFO_SUCCESS: "GET_INFO_SUCCESS",
  LOADING_USER: "LOADING_USER",
  NEW_USER_SUCCESS: "NEW_USER_SUCCESS",
  NEW_USER_FAILURE: "NEW_USER_FAILURE",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  RESET_PROFILE_VIEW: "RESET_PROFILE_VIEW"
};

export const registerUser = token => {
  return async dispatch => {
    try {
      const response = await getUser(token);
      if (responseOK(response)) {
        window.localStorage.userId = response.data.id;
        dispatch({
          type: actions.REGISTER_SUCCESS,
          payload: { loggedProfile: response.data }
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

export const loading = status => {
  return dispatch => {
    dispatch({
      type: actions.LOADING_USER,
      payload: { loading: status }
    });
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

export const getUserInfo = id => {
  return async dispatch => {
    try {
      const profile = await getProfileInfo(id);
      const rents = await getUserRents(id);
      const wishes = await getUserWishlist(id);
      const comments = await getUserComments(id);
      if (responseOK(rents) && responseOK(wishes) && responseOK(comments)) {
        dispatch({
          type: actions.GET_INFO_SUCCESS,
          payload: {
            profile: profile.data,
            rents: rents.data,
            wishlist: wishes.data,
            comments: comments.data
          }
        });
      } else {
        throw new Error(CONNECTION_FAILURE);
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        payload: { error: e }
      });
    }
    dispatch(loading(false));
  };
};

export const resetProfileView = () => {
  return {
    type: actions.RESET_PROFILE_VIEW
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
