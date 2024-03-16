import { selectTheme, set, toggle } from '@features/theme/themeSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'

export const useTheme = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)
  const nextTheme = theme.isDark ? 'light' : 'dark'

  const toggleTheme = () => {
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
    dispatch(toggle())
  }

  const setTheme = (mode: ThemeModes) => {
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.setItem('theme', mode)
    dispatch(set(mode))
  }

  return [theme, { toggleTheme, setTheme }] as const
}
