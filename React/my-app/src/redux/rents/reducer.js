import { actions } from "./actions";

const initialState = {
  loadingBookStatus: true,
  bookAvailable: true,
  disabled: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.BOOK_AVAILABLE:
      return { ...state, bookAvailable: true, disabled: false };
      break;
    case actions.BOOK_UNAVAILABLE:
      return { ...state, bookAvailable: false, disabled: false };
      break;
    case actions.BOOK_IN_USE:
      return { ...state, bookAvailable: false, disabled: true };
      break;
    case actions.LOADING:
      return { ...state, loadingBookStatus: action.payload.loading };
    default:
      return state;
  }
}

export default reducer;
