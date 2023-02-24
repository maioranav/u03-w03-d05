import { RENDER_HOME } from "../actions";

const initialState = {
  home: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_HOME:
      return state;
    default:
      return state;
  }
};

export default homeReducer;