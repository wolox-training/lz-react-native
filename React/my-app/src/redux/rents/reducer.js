import { actions } from "./actions";

const initialState = {
  loadingBookStatus: true,
  bookAvailable: true,
  disabled: false,
  processing: false,
  text: NOTHING
};

const NOTHING = "";
const DEVOLVER_ANTES = "*Devolver antes de";
const NO_SE_ENCUENTRA = "*No se encuentra disponible";

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_WISHLIST_SUCCESS:
      return state;
      break;
    case actions.BOOK_AVAILABLE:
      return { ...state, bookAvailable: true, disabled: false, text: NOTHING };
      break;
    case actions.BOOK_UNAVAILABLE:
      return {
        ...state,
        bookAvailable: false,
        disabled: false,
        text: NO_SE_ENCUENTRA
      };
      break;
    case actions.BOOK_IN_USE:
      return {
        ...state,
        bookAvailable: false,
        disabled: true,
        text: DEVOLVER_ANTES
      };
      break;
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
