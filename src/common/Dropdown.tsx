import { Children, cloneElement, useMemo, useRef, isValidElement } from 'react'
import { useKeyPressListener } from '@hooks/useKeyPressHandler'
import { useOnClickOutside } from '@hooks/useOnClickOutside'
import useToggle from '@hooks/useToggle'

interface DropdownProps extends React.PropsWithChildren {
  Toggle: React.ReactElement<{
    onClick?: React.MouseEventHandler | undefined
    isActive: boolean
  }>
  outerContainer?: React.HTMLAttributes<HTMLDivElement>
  innerContainer?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

export function Dropdown({ Toggle, outerContainer, innerContainer, children }: DropdownProps) {
  const ref = useRef(null)
  const [isActive, toggleMethods] = useToggle()
  const { toggle, close } = toggleMethods

  const keyHandlers = useMemo(() => {
    return { Escape: close }
  }, [close])

  const ToggleClone = useMemo(() => {
    const onToggleClick = Toggle.props.onClick
    const handleToggleClick: React.MouseEventHandler = (e) => {
      onToggleClick?.(e)
      toggle()
    }
    return cloneElement(Toggle, { onClick: handleToggleClick, isActive })
  }, [Toggle, isActive, toggle])

  const childrenWithProps = useMemo(() => {
    return Children.map(children, (child) => {
      const isFunctionElement = isValidElement(child) && typeof child.type === 'function'
      return isFunctionElement ? cloneElement(child, toggleMethods) : child
    })
  }, [children, toggleMethods])

  useOnClickOutside({ ref, handler: close, skipHandler: !isActive })
  useKeyPressListener({ keyHandlers, skipHandler: !isActive })
  return (
    <div ref={ref} {...outerContainer}>
      {ToggleClone}
      {isActive && <div {...innerContainer}>{childrenWithProps}</div>}
    </div>
  )
}
