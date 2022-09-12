import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from "../reducers/favoritosReducer";
import PersonajeReducer from "../reducers/personajesReducer";

const rootReducer = combineReducers({
  favoritos: FavoriteReducer,
  personajes: PersonajeReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(()=> console.log(store));


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;