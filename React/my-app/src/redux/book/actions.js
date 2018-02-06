import { getBookGallery, getBookInfo } from "../../service/books";

export const actions = {
  GET_BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
  GET_BOOKS_FAILURE: "GET_BOOKS_FAILURE",
  GET_BOOK_INFO_SUCCESS: "GET_BOOK_INFO_SUCCESS",
  GET_BOOKS_INFO_FAILURE: "GET_BOOK_INFO_FAILURE",
  GET_FILTER_GALLERY: "GET_FILTER_GALLERY",
  LOADING: "LOADING",
  RESET_BOOK_VIEW: "RESET_BOOK_VIEW",
  RESET_GALLERY_VIEW: "RESET_GALLERY_VIEW",
  LOADING_GALLERY: "LOADING_GALLERY"
};

export const loading = status => {
  return dispatch => {
    dispatch({
      type: actions.LOADING,
      payload: { loading: status }
    });
  };
};

export const loadingGallery = status => {
  return dispatch => {
    dispatch({
      type: actions.LOADING_GALLERY,
      payload: { loadingGallery: status }
    });
  };
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
    dispatch(loadingGallery(false));
  };
};

export const resetBookView = () => {
  return {
    type: actions.RESET_BOOK_VIEW
  };
};

export const resetGalleryView = () => {
  return {
    type: actions.RESET_GALLERY_VIEW
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
    dispatch(loading(false));
  };
};

export const getFilterGallery = (data, word, type) => {
  return async dispatch => {
    let gallery;
    if (type != "null") {
      gallery = data.filter(book =>
        book[type].toLowerCase().includes(word.toLowerCase())
      );
    } else {
      gallery = data.filter(
        book =>
          book.title.toLowerCase().includes(word.toLowerCase()) ||
          book.author.toLowerCase().includes(word.toLowerCase())
      );
    }
    dispatch({
      type: actions.GET_FILTER_GALLERY,
      payload: { gallery: gallery }
    });
  };
};
