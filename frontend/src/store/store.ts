import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  adminReducer,
  authReducer,
  dishReducer,
  orderReducer,
  reviewReducer,
  userReducer,
  restaurantReducer,
} from './slices';
import { localityReducer } from "./slices/locality.slice";
import { promotionsReducer } from "./slices/promotions.slice";

const rootReducer = combineReducers({
  authReducer,
  adminReducer,
  dishReducer,
  userReducer,
  orderReducer,
  reviewReducer,
  restaurantReducer,
  localityReducer,
  promotionsReducer
});
export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
