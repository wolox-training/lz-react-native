import { actions } from "./actions";

const initialState = {
  bookList: [],
  bookInfo: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return { ...state, bookList: action.payload.bookList };
      break;
    case actions.GET_BOOK_INFO_SUCCESS:
      return { ...state, bookInfo: action.payload.bookInfo };
      break;
    default:
      return state;
  }
}

export default reducer;
