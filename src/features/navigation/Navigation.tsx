import { CreateDropdown, UserDropdown } from '.'
import './navigation.css'

export const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="left">LEFT</div>
      <div className="center">CENTER</div>
      <div className="right">
        <CreateDropdown />
        <UserDropdown />
      </div>
    </nav>
  )
}
