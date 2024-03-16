import { Login } from '@/assets/svg'
import { DropdownButton, DropdownIcon } from '..'

export function LogoutButton({ ...buttonProps }: React.ComponentProps<'button'>) {
  return <DropdownButton {...buttonProps} Icon={<DropdownIcon Icon={<Login className="mr-8" />} />} text="Logout" />
}
