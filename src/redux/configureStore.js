import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { apiSlice } from './api/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, logger]),
});

export default store;
