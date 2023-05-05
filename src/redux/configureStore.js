import { combineReducers, configureStore } from '@reduxjs/toolkit';
import greetingsSlice from './greeting';

const reducer = combineReducers({
  greeting: greetingsSlice,
});

const store = configureStore({
  reducer,
});

export default store;
