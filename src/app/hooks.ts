import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '@app/store'

// https://redux-toolkit.js.org/tutorials/typescript
// https://redux-toolkit.js.org/rtk-query/usage-with-typescript#typing-dispatch-and-getstate
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
