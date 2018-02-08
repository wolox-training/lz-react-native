import { getRents } from "../../service/books";
import { getUser, getWishlist, createWishlist } from "../../service/accounts";

export const actions = {
  GET_BOOKS_RENTS: "GET_BOOKS_RENTS",
  GET_WISHLIST: "GET_WISHLIST",
  CREATE_WISHLIST: "CREATE_WISHLIST",
  BOOK_AVAILABLE: "BOOK_AVAILABLE",
  BOOK_IN_USE: "BOOK_IN_USE",
  BOOK_UNAVAILABLE: "BOOK_UNAVAILABLE",
  CONNECTION_FAILURE: "CONNECTION_FAILURE"
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
      if (responseOK(userResponse, bookResponse)) {
        if (bookAvailable(bookResponse.data)) {
          dispatch({
            type: actions.BOOK_AVAILABLE
          });
        } else {
          if (userHasTheBook(userResponse.data, bookResponse.data)) {
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
  books.all(book => book.returned_at);
};

const userHasTheBook = (user, books) => {
  books.any(book => book.user === user);
};

const responseOK = (userResponse, bookResponse) => {
  return (
    userResponse.status >= 200 &&
    userResponse.status < 300 &&
    bookResponse.status >= 200 &&
    bookResponse.status < 300
  );
};
