import { useAppDispatch } from '@/app/hooks'
import { Login } from '@/assets/svg'
import { setModalId } from '../modals/modalSlice'
import { DropdownIcon } from './DropdownIcon'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Auth({ close }: { close?: () => void }) {
  const dispatch = useAppDispatch()

  const handleClick = () => {
    close?.()
    dispatch(setModalId('signUp'))
  }

  return (
    <button onClick={handleClick} className="nav-dropdown-item overlay">
      <DropdownIcon Icon={<Login style={{ marginRight: 8 }} />} />
      <span>Sign Up / Sign In</span>
    </button>
  )
}
