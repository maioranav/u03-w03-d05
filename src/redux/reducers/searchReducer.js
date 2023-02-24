import { FOUND_DATA } from "../actions";

const initialState = {
   search: []
}

const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOUND_DATA:
         return { ...state, search: action.payload };
      default:
         return state;
   }
};

export default searchReducer;