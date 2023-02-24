import { SETPLAYER } from "../actions";

const initialState = {
   artist: "",
   track: "",
   id: ""
};

const playerReducer = (state = initialState, action) => {
   switch (action.type) {
      case SETPLAYER:
         return action.payload;
      default:
         return state;
   }
};

export default playerReducer;