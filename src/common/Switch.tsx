import classNames from 'classnames'

interface SwitchProps extends React.ComponentProps<'button'> {
  checked: boolean
  trackClassName?: string
  handleClassName?: string
  layerClassName?: string
}

export const Switch = ({
  checked,
  onClick,
  className,
  trackClassName,
  handleClassName,
  layerClassName,
  children,
  ...rest
}: SwitchProps) => {
  return (
    <button className={classNames('switch', { checked }, className)} onClick={onClick} {...rest}>
      {children}
      <div className={classNames('track', trackClassName)}>
        <div className={classNames('handle', handleClassName)}>
          <div className={classNames('layer', layerClassName)}></div>
        </div>
      </div>
    </button>
  )
}
