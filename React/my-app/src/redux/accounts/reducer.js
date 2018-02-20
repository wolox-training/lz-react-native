import { actions } from "./actions";

const initialState = {
  loggedProfile: null,
  profile: null,
  notification: [],
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
      return { ...state, loggedProfile: action.payload.loggedProfile };
    case actions.GET_INFO_SUCCESS:
      return {
        ...state,
        profile: action.payload.profile,
        rents: action.payload.rents,
        wishlist: action.payload.wishlist,
        comments: action.payload.comments
      };
    case actions.GET_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notification: action.payload.notification
      };
    case actions.LOADING_USER:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}

export default reducer;
