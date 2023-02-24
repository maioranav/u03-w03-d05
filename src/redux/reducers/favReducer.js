import { ADD_FAV, REMOVE_FAV } from "../actions";


const initialState = {
   favs: []
};

const favReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_FAV:
         if (state.favs?.find((el) => el === action.payload)) {
            return state
         }
         else {
            return { ...state, favs: [...state.favs, action.payload] }
         };
      case REMOVE_FAV:
         return { ...state, favs: state.favs?.filter(el => el !== action.payload) };
      default:
         return state;
   }
};

export default favReducer;