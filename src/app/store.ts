import { configureStore } from '@reduxjs/toolkit';
import { api } from '../features/api/api';

// https://redux-toolkit.js.org/rtk-query/overview#configure-the-store
export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
	},

	middleware: (buildGetDefaultMiddleware) =>
		buildGetDefaultMiddleware().concat(api.middleware),
});
