import { configureStore } from '@reduxjs/toolkit'
import { api } from '@features/api/api'
import themeReducer from '@features/theme/themeSlice'
import modalReducer from '@/features/modal/modalSlice'
import postReducer from '@/features/create/postSlice'
import communityReducer from '@/features/create/communitySlice'

// https://redux-toolkit.js.org/rtk-query/overview#configure-the-store
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
    modal: modalReducer,
    post: postReducer,
    community: communityReducer,
  },
  middleware: (buildGetDefaultMiddleware) => buildGetDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
