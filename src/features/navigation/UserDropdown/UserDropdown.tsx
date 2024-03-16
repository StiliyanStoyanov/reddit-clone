import { Person } from '@assets/svg'
import { useAppDispatch, useDropdown } from '@/hooks'
import { setModal } from '../../modal/modalSlice'
import { AuthButton, LogoutButton, ProfileLink, ThemeSwitch } from '.'
import { signOut, useAuthSubscriptionQuery } from '@/features/api/auth'
import { DropdownToggle } from '..'

export const UserDropdown = () => {
  const dispatch = useAppDispatch()
  const { Dropdown, closeDropdown } = useDropdown()
  const { data: user } = useAuthSubscriptionQuery()

  const handleAuthClick = () => {
    dispatch(setModal('signUp'))
    closeDropdown()
  }

  const handleLogoutClick = async () => {
    await signOut()
    closeDropdown()
  }

  return (
    <Dropdown
      Toggle={<DropdownToggle Icon={<Person />} />}
      outerContainerProps={{ id: 'user-dropdown' }}
      innerContainerProps={{ className: 'nav-dropdown-container' }}
    >
      {user && <ProfileLink username={user.username} onClick={close} />}
      <ThemeSwitch />
      {!user && <AuthButton onClick={handleAuthClick} />}
      {user && <LogoutButton onClick={handleLogoutClick} />}
    </Dropdown>
  )
}
