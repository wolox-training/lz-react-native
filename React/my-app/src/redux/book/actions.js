import {
  getBookGallery,
  getBookInfo,
  getComments,
  postComment,
  getSuggestions,
  newBookSuggestion
} from "../../service/books";
import { responseOK } from "../../utils/requestUtils";
import { CONNECTION_FAILURE } from "../stringErrors";

export const actions = {
  COMMENT_FORMAT_INVALID: "COMMENT_FORMAT_INVALID",
  CONNECTION_FAILURE: "CONNECTION_FAILURE",
  FILTER_GALLERY: "FILTER_GALLERY",
  GET_BOOKS_SUCCESS: "GET_BOOKS_SUCCESS",
  GET_BOOKS_FAILURE: "GET_BOOKS_FAILURE",
  GET_BOOK_INFO_SUCCESS: "GET_BOOK_INFO_SUCCESS",
  GET_BOOKS_INFO_FAILURE: "GET_BOOK_INFO_FAILURE",
  LOADING: "LOADING",
  LOADING_GALLERY: "LOADING_GALLERY",
  NEW_COMMENT_SUCCESS: "NEW_COMMENT_SUCCESS",
  RESET_BOOK_VIEW: "RESET_BOOK_VIEW",
  RESET_GALLERY_VIEW: "RESET_GALLERY_VIEW",
  UPLOADING_COMMENT: "UPLOADING_COMMENT",
  NEW_BOOK_SUCCESS: "NEW_BOOK_SUCCESS"
};

export const loading = status => {
  return dispatch => {
    dispatch({
      type: actions.LOADING,
      payload: { loading: status }
    });
  };
};

export const addNewBook = (name, author, link) => {
  return async dispatch => {
    try {
      const response = await newBookSuggestion({
        book_suggestion: { title: name, author: author, link: link }
      });
      if (responseOK(response)) {
        dispatch({
          type: actions.NEW_BOOK_SUCCESS
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

export const uploadingComment = status => {
  return dispatch => {
    dispatch({
      type: actions.UPLOADING_COMMENT,
      payload: { uploadingComment: status }
    });
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

export const createNewComment = (bookId, body) => {
  return async dispatch => {
    try {
      dispatch(uploadingComment(true));
      const response = await postComment(bookId, body);
      if (responseOK(response)) {
        dispatch({
          type: actions.NEW_COMMENT_SUCCESS
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
    dispatch(uploadingComment(false));
  };
};

export const getBook = id => {
  return async dispatch => {
    try {
      const bookResponse = await getBookInfo(id);
      const suggestResponse = await getSuggestions(id);
      const commentResponse = await getComments(id);
      if (responseOK(bookResponse) && responseOK(commentResponse)) {
        dispatch({
          type: actions.GET_BOOK_INFO_SUCCESS,
          payload: {
            bookInfo: bookResponse.data,
            commentList: commentResponse.data,
            suggestions: suggestResponse.data
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
    if (type !== "null") {
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
