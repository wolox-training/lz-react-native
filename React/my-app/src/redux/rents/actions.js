// import { getRents } from "../../service/books";
// import { getWishlist, createWishlist } from "../../service/accounts";
//
// export const actions = {
//   GET_BOOKS_RENTS: "GET_BOOKS_RENTS",
//   GET_WISHLIST: "GET_WISHLIST",
//   CREATE_WISHLIST: "CREATE_WISHLIST"
// };
//
// export const loading = status => {
//   return dispatch => {
//     dispatch({
//       type: actions.LOADING,
//       payload: { loading: status }
//     });
//   };
// };
//
// export const getRents = () => {
//   return async dispatch => {
//     const response = await getBookGallery();
//     if (response.status >= 200 && response.status < 300) {
//       dispatch({
//         type: actions.GET_BOOKS_SUCCESS,
//         payload: { bookList: response.data }
//       });
//     } else {
//       dispatch({ type: actions.GET_BOOKS_FAILURE, payload: { err: response } });
//     }
//     dispatch(loadingGallery(false));
//   };
// };
//
// export const getWishlist = () => {
//   return async dispatch => {
//     const response = await getBookGallery();
//     if (response.status >= 200 && response.status < 300) {
//       dispatch({
//         type: actions.GET_BOOKS_SUCCESS,
//         payload: { bookList: response.data }
//       });
//     } else {
//       dispatch({ type: actions.GET_BOOKS_FAILURE, payload: { err: response } });
//     }
//     dispatch(loadingGallery(false));
//   };
// };
//
// export const resetBookView = () => {
//   return {
//     type: actions.RESET_BOOK_VIEW
//   };
// };
