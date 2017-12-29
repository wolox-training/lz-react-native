import { getBookGallery } from "../../service/books";

export const actions = {
  GET_BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
  GET_BOOKS_FAILURE: "GET_BOOKS_FAILURE"
};

export const getBooks = () => {
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
