import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  items: [],
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case NEW_POST:
      const newItems = state.items.slice();
      newItems.unshift(action.payload);
      return {
        ...state,
        items: newItems,
        item: action.payload,
      };
    default:
      return state;
  }
}
