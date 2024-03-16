import { RootState, AppDispatch } from '@/app/store'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import { useKeyPressListener } from './useKeyPressHandler'
import { useOnClickOutside } from './useOnClickOutside'
import { useTheme } from './useTheme'
import { useToggle } from './useToggle'
import { useDropdown } from './useDropdown'
import { useModal } from './useModal'

// https://redux-toolkit.js.org/tutorials/typescript
// https://redux-toolkit.js.org/rtk-query/usage-with-typescript#typing-dispatch-and-getstate
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export { useKeyPressListener, useOnClickOutside, useTheme, useToggle, useDropdown, useModal }
