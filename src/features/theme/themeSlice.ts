import { RootState } from '@app/store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

function setThemeState(mode: ThemeModes) {
  return {
    mode: mode,
    isDark: mode === 'dark',
    isLight: mode === 'light',
  }
}

const initializeState = () => {
  let mode = localStorage.getItem('theme') as ThemeModes | null
  if (!mode) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    mode = prefersDarkScheme ? 'dark' : 'light'
    localStorage.setItem('theme', mode)
  }
  document.documentElement.setAttribute('data-theme', mode)
  return setThemeState(mode)
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: initializeState(),
  reducers: {
    set(_, action: PayloadAction<ThemeModes>) {
      return setThemeState(action.payload)
    },
    toggle(state) {
      const nextTheme = state.isDark ? 'light' : 'dark'
      return setThemeState(nextTheme)
    },
  },
})

export const selectTheme = (state: RootState) => state.theme
export const { set, toggle } = themeSlice.actions
export default themeSlice.reducer
