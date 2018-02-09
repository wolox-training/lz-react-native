import { getRents } from "../../service/books";
import { getUser, getWishlist, createWishlist } from "../../service/accounts";

export const actions = {
  BOOK_AVAILABLE: "BOOK_AVAILABLE",
  BOOK_IN_USE: "BOOK_IN_USE",
  BOOK_UNAVAILABLE: "BOOK_UNAVAILABLE",
  CONNECTION_FAILURE: "CONNECTION_FAILURE",
  LOADING: "LOADING"
};

export const loading = status => {
  return dispatch => {
    dispatch({
      type: actions.LOADING,
      payload: { loadingBookStatus: status }
    });
  };
};

export const getBookStatus = bookId => {
  return async dispatch => {
    try {
      const userResponse = await getUser();
      const bookResponse = await getRents(bookId);
      debugger;
      if (responseOK(userResponse, bookResponse)) {
        if (bookAvailable(bookResponse.data)) {
          debugger;
          dispatch({
            type: actions.BOOK_AVAILABLE
          });
        } else {
          if (userHasTheBook(userResponse.data, bookResponse.data)) {
            debugger;
            dispatch({
              type: actions.BOOK_IN_USE
            });
          } else {
            debugger;
            dispatch({
              type: actions.BOOK_UNAVAILABLE
            });
          }
        }
      } else {
        throw new Error("Failed to connect");
      }
    } catch (e) {
      dispatch({
        type: actions.CONNECTION_FAILURE,
        payload: e
      });
    }
    dispatch(loading(false));
  };
};

const bookAvailable = books => {
  return books.every(book => book.returned_at);
};

const userHasTheBook = (user, books) => {
  return books.some(book => book.user === user);
};

const responseOK = (userResponse, bookResponse) => {
  return (
    userResponse.status >= 200 &&
    userResponse.status < 300 &&
    bookResponse.status >= 200 &&
    bookResponse.status < 300
  );
};
