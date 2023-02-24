import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

import searchReducer from "../reducers/searchReducer";
import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer"
import playerReducer from "../reducers/playerReducer";
import favReducer from "../reducers/favReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSISTSECRET
    })
  ]
};


const rootReducer = combineReducers({
  search: searchReducer,
  album: albumReducer,
  artist: artistReducer,
  player: playerReducer,
  favs: favReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export const persistor = persistStore(store);
