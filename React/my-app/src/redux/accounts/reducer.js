import { actions } from "./actions";

const initialState = {
  token: null,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.NEW_USER_SUCCESS:
      return { ...state, error: null };
    case actions.CHECK_USER_SUCCESS:
      return { ...state, token: action.payload.token };
    case actions.CONNECTION_FAILURE:
      return { ...state, error: action.payload.error };
    case actions.REGISTER_SUCCESS:
      return state;
    default:
      return state;
  }
}

export default reducer;
