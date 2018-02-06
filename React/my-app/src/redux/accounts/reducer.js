import { actions } from "./actions";

const initialState = {
  token: null,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.NEW_USER_SUCCESS:
      return { ...state, error: action.payload.error };
      break;
    case actions.NEW_USER_FAILURE:
      return { ...state, error: action.payload.error };
      break;
    case actions.CHECK_USER_SUCCESS:
      return { ...state, token: action.payload.token };
      break;
    case actions.CHECK_USER_FAILURE:
      return { ...state, error: action.payload.error };
      break;
    default:
      return state;
  }
}

export default reducer;
