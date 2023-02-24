import { ADD_FAV, REMOVE_FAV } from "../actions";


const initialState = {
   favs: []
};

const favReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_FAV:
         return state;
      case REMOVE_FAV:
         return state;
      default:
         return state;
   }
};

export default favReducer;