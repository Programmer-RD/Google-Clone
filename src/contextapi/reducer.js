import { act } from "react-dom/test-utils";

export const initState = {
  term: null,
};
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};
const reducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };
    default:
      return state;
  }
};
export default reducer;
