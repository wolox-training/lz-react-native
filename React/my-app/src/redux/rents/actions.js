import { getRents } from "../../service/books";
import {
  getUser,
  getWishlist,
  addNewItemToWishlist
} from "../../service/accounts";
import { responseOK } from "../../utils/requestUtils";

export const actions = {
  ADD_WISHLIST_SUCCESS: "ADD_WISHLIST_SUCCESS",
  BOOK_STATUS_SUCCESS: "BOOK_STATUS_SUCCESS",
  CONNECTION_FAILURE: "CONNECTION_FAILURE",
  LOADING: "LOADING",
  PROCESSING: "PROCESSING"
};

const FAILED = "Failed to connect";

export const loading = status => {
  return dispatch => {
    dispatch({
      type: actions.LOADING,
      payload: { loadingBookStatus: status }
    });
  };
};

export const processing = status => {
  return dispatch => {
    dispatch({
      type: actions.PROCESSING,
      payload: { processing: status }
    });
  };
};

export const newIntemWishlist = bookId => {
  return async dispatch => {
    try {
      dispatch(processing(true));
      const response = await addNewItemToWishlist({
        wish: { book_id: bookId, user_id: window.localStorage.userId }
      });
      if (responseOK(response)) {
        dispatch({
          type: actions.ADD_WISHLIST_SUCCESS
        });
      } else {
        throw new Error(FAILED);
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        payload: { err: e }
      });
    }
    dispatch(processing(false));
  };
};

export const getBookStatus = bookId => {
  return async dispatch => {
    try {
      const bookResponse = await getRents(bookId);
      if (responseOK(bookResponse)) {
        dispatch({
          type: actions.BOOK_STATUS_SUCCESS,
          payload: { bookStatus: bookResponse.data }
        });
      } else {
        throw new Error(FAILED);
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        payload: { err: e }
      });
    }
    dispatch(processing(false));
  };
};
