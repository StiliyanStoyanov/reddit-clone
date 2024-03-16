import { configureStore } from '@reduxjs/toolkit'
import { api } from '@features/api/api'
import themeReducer from '@features/theme/themeSlice'
import modalReducer from '@/features/modal/modalSlice'

// https://redux-toolkit.js.org/rtk-query/overview#configure-the-store
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
    modal: modalReducer,
  },
  middleware: (buildGetDefaultMiddleware) => buildGetDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
