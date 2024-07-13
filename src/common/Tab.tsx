import classNames from 'classnames'
export type TabVariants = 'primary' | 'secondary'
export interface TabProps extends React.ComponentProps<'button'> {
  variant?: TabVariants
  className?: string
  isActive?: boolean
  spanProps?: React.JSX.IntrinsicElements['span']
}

export const Tab = ({
  variant = 'primary',
  className,
  isActive = false,
  spanProps,
  children,
  ...buttonProps
}: TabProps) => {
  return (
    <button type="button" className={classNames('tab', variant, { active: isActive }, className)} {...buttonProps}>
      {children}
      <span className="tab-outline" {...spanProps} />
    </button>
  )
}
