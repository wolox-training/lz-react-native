import { getBooks, actions } from "./actions";
import { getBookGallery } from "../../service/books";

const initialState = {
  bookList: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS:
      return { ...state, bookList: action.payload.bookList };
      break;
    default:
      return state;
  }
}

export default reducer;
