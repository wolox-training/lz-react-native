import { actions } from "./actions";

const initialState = {
  rents: [],
  wishlist: [],
  comments: [],
  loading: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.NEW_USER_SUCCESS:
      return { ...state, error: null };
    case actions.CHECK_USER_SUCCESS:
      return { ...state, token: action.payload.token };
    case actions.CONNECTION_FAILURE:
      return { ...state, error: action.payload.error };
    case actions.RESET_PROFILE_VIEW:
      return {
        ...state,
        rents: [],
        wishlist: [],
        comments: [],
        loading: true
      };
    case actions.REGISTER_SUCCESS:
      return state;
    case actions.GET_INFO_SUCCESS:
      return {
        ...state,
        rents: action.payload.rents,
        wishlist: action.payload.wishlist,
        comments: action.payload.comments
      };
    case actions.LOADING_USER:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}

export default reducer;
