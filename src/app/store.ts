import { configureStore } from '@reduxjs/toolkit';
import { api } from '../features/api/api';

// https://redux-toolkit.js.org/rtk-query/overview#configure-the-store
export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
	},

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
