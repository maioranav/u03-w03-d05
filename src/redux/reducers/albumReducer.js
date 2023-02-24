import { ALBUM_FETCHED } from "../actions";

const initialState = {
   albumres: []
}

const albumReducer = (state = initialState, action) => {
   switch (action.type) {
      case ALBUM_FETCHED:
         return { ...state, albumres: action.payload };
      default:
         return state;
   }
};

export default albumReducer;