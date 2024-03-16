import { Login } from '@/assets/svg'
import { DropdownButton, DropdownIcon } from '..'

export function AuthButton({ ...buttonProps }: React.ComponentProps<'button'>) {
  return (
    <DropdownButton
      {...buttonProps}
      Icon={<DropdownIcon Icon={<Login className="mr-8" />} />}
      text="Sign Up / Sign In"
    />
  )
}
