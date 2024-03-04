import classNames from 'classnames'

interface TabProps extends React.PropsWithChildren {
  className?: string
  onClick?: () => void
  isActive?: boolean
}

export const Tab = ({ className, onClick, isActive = false, children }: TabProps) => {
  const tabClass = classNames('tab', { active: isActive }, 'flex-center', 'overlay', className)
  return (
    <button type="button" onClick={onClick} className={tabClass}>
      {children}
      <span />
    </button>
  )
}
