import { actions } from "./actions";

const initialState = {
  loadingBookStatus: true,
  processing: false,
  bookStatus: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_WISHLIST_SUCCESS:
      return state;
    case actions.BOOK_STATUS_SUCCESS:
      return { ...state, bookStatus: action.payload.bookStatus };
    case actions.LOADING:
      return { ...state, loadingBookStatus: action.payload.loadingBookStatus };
    case actions.CONNECTION_FAILURE:
      return { ...state, err: action.payload.err };
    case actions.PROCESSING:
      return { ...state, processing: action.payload.processing };
    default:
      return state;
  }
}

export default reducer;
