import { BASEACTION } from "../actions";

const initialState = {
  content: []
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case BASEACTION:
      return state;
    default:
      return state;
  }
};

export default playerReducer;