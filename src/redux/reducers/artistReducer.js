import { ARTIST_FETCHED } from "../actions";

const initialState = {
   artistres: []
}

const artistReducer = (state = initialState, action) => {
   switch (action.type) {
      case ARTIST_FETCHED:
         return { ...state, artistres: action.payload };
      default:
         return state;
   }
};

export default artistReducer;