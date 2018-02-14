import { getBookGallery, getBookInfo, getComments } from "../../service/books";
import { responseOK } from "../../utils/requestUtils";

export const actions = {
  GET_BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
  GET_BOOKS_FAILURE: "GET_BOOKS_FAILURE",
  GET_BOOK_INFO_SUCCESS: "GET_BOOK_INFO_SUCCESS",
  GET_BOOKS_INFO_FAILURE: "GET_BOOK_INFO_FAILURE",
  FILTER_GALLERY: "FILTER_GALLERY",
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
    try {
      const response = await getBookGallery();
      if (responseOK(response)) {
        dispatch({
          type: actions.GET_BOOKS_SUCCESS,
          payload: { bookList: response.data }
        });
      } else {
        dispatch({
          type: actions.GET_BOOKS_FAILURE,
          payload: { err: response }
        });
      }
    } catch (e) {
      dispatch({
        type: actions.GET_BOOKS_FAILURE,
        payload: { error: e }
      });
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
    try {
      const bookResponse = await getBookInfo(id);
      const commentResponse = await getComments(id);
      if (responseOK(bookResponse) && responseOK(commentResponse)) {
        dispatch({
          type: actions.GET_BOOK_INFO_SUCCESS,
          payload: {
            bookInfo: bookResponse.data,
            commentList: commentResponse.data
          }
        });
      } else {
        dispatch({
          type: actions.GET_BOOK_INFO_FAILURE,
          payload: { err1: bookResponse, err2: commentResponse }
        });
      }
    } catch (e) {
      dispatch({
        type: actions.GET_BOOK_INFO_FAILURE,
        payload: { err1: e }
      });
    }
    dispatch(loading(false));
  };
};

export const filterGallery = (data, word, type) => {
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
      type: actions.FILTER_GALLERY,
      payload: { gallery: gallery }
    });
  };
};
