import { getBookGallery, getBookInfo } from "../../service/books";

export const actions = {
  GET_BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
  GET_BOOKS_FAILURE: "GET_BOOKS_FAILURE",
  GET_BOOK_INFO_SUCCESS: "GET_BOOK_INFO_SUCCESS",
  GET_BOOKS_INFO_FAILURE: "GET_BOOK_INFO_FAILURE"
};

export const getBookList = () => {
  return async dispatch => {
    const response = await getBookGallery();
    if (response.status >= 200 && response.status < 300) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: { bookList: response.data }
      });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: { err: response } });
    }
  };
};

export const getBook = id => {
  return async dispatch => {
    const response = await getBookInfo(id);
    if (response.status >= 200 && response.status < 300) {
      dispatch({
        type: actions.GET_BOOK_INFO_SUCCESS,
        payload: { bookInfo: response.data }
      });
    } else {
      dispatch({
        type: actions.GET_BOOK_INFO_FAILURE,
        payload: { err: response }
      });
    }
  };
};
