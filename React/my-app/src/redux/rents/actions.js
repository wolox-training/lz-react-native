import { getRents } from "../../service/books";
import {
  getUser,
  getWishlist,
  addNewItemToWishlist
} from "../../service/accounts";

export const actions = {
  ADD_WISHLIST_SUCCESS: "ADD_WISHLIST_SUCCESS",
  BOOK_AVAILABLE: "BOOK_AVAILABLE",
  BOOK_IN_USE: "BOOK_IN_USE",
  BOOK_UNAVAILABLE: "BOOK_UNAVAILABLE",
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
      console.log(window.localStorage.userId);
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
      console.log(window.localStorage.userId);
      if (responseOK(bookResponse)) {
        if (bookAvailable(bookResponse.data)) {
          dispatch({
            type: actions.BOOK_AVAILABLE
          });
        } else {
          if (userHasTheBook(bookResponse.data)) {
            dispatch({
              type: actions.BOOK_IN_USE
            });
          } else {
            dispatch({
              type: actions.BOOK_UNAVAILABLE
            });
          }
        }
      } else {
        throw new Error(FAILED);
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        payload: { err: e }
      });
    }
    dispatch(loading(false));
  };
};

const bookAvailable = books => {
  return books.every(book => book.returned_at);
};

const userHasTheBook = books => {
  return books.some(book => book.user.id === window.localStorage.userId);
};

const responseOK = bookResponse => {
  return bookResponse.status >= 200 && bookResponse.status < 300;
};
