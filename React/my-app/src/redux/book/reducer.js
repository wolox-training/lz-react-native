import { actions } from "./actions";

const initialState = {
  bookList: [],
  gallery: [],
  bookInfo: null,
  loading: true,
  loadingGallery: true,
  commentList: [],
  suggestions: [],
  uploadingComment: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FILTER_GALLERY:
      return { ...state, gallery: action.payload.gallery };
    case actions.GET_BOOKS_SUCCESS:
      return {
        ...state,
        bookList: action.payload.bookList,
        gallery: action.payload.bookList
      };
    case actions.GET_BOOK_INFO_SUCCESS:
      return {
        ...state,
        bookInfo: action.payload.bookInfo,
        commentList: action.payload.commentList,
        suggestions: action.payload.suggestions
      };
    case actions.RESET_BOOK_VIEW:
      return { ...state, bookInfo: null, loading: true };
    case actions.RESET_GALLERY_VIEW:
      return { ...state, bookList: [], gallery: [], loadingGallery: true };
    case actions.LOADING:
      return { ...state, loading: action.payload.loading };
    case actions.UPLOADING_COMMENT:
      return { ...state, uploadingComment: action.payload.uploadingComment };
    case actions.NEW_COMMENT_SUCCESS:
      return state;
    case actions.LOADING_GALLERY:
      return { ...state, loadingGallery: action.payload.loadingGallery };
    default:
      return state;
  }
}

export default reducer;
