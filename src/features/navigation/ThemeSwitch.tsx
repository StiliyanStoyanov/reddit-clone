import { Moon } from '@assets/svg'
import { Switch } from '@common/Switch'
import { useTheme } from '@hooks/useTheme'
import { DropdownIcon } from './DropdownIcon'

export function ThemeSwitch() {
  const [theme, { toggleTheme }] = useTheme()

  return (
    <Switch checked={theme.isDark} className="nav-dropdown-item overlay" trackClassName="ml-auto" onClick={toggleTheme}>
      <DropdownIcon Icon={<Moon />} />
      <span>Dark Mode</span>
    </Switch>
  )
}
