import { Close } from '@/assets/svg'
import classNames from 'classnames'

export const CloseButton = ({ className, ...rest }: React.ComponentProps<'button'>) => {
  return (
    <button className={classNames('close-button', className)} {...rest}>
      <Close />
    </button>
  )
}
