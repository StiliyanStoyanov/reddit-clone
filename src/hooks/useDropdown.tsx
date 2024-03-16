import { cloneElement, useCallback, useRef } from 'react'
import { useKeyPressListener, useOnClickOutside, useToggle } from '@/hooks'

interface UseDropdownProps {
  isOpen?: boolean
  closeOnOutsideClick?: boolean
  closeOnEsc?: boolean
}

export interface DropdownProps extends React.PropsWithChildren {
  Toggle: React.ReactElement<{
    onClick?: React.MouseEventHandler
    isActive: boolean
  }>
  outerContainerProps?: React.HTMLAttributes<HTMLDivElement>
  innerContainerProps?: React.HTMLAttributes<HTMLDivElement>
}

export function useDropdown({ isOpen = false, closeOnOutsideClick = true, closeOnEsc = true }: UseDropdownProps = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isActive, toggleMethods] = useToggle(isOpen)
  const { toggle, close, open } = toggleMethods

  const DropdownComponent = useCallback(
    ({ Toggle, children, outerContainerProps, innerContainerProps }: DropdownProps) => {
      const onToggleClick = Toggle.props.onClick
      const handleToggleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        onToggleClick?.(e)
        toggle()
      }

      const ToggleClone = cloneElement(Toggle, { onClick: handleToggleClick, isActive })
      return (
        <div ref={ref} {...outerContainerProps}>
          {ToggleClone}
          {isActive && <div {...innerContainerProps}>{children}</div>}
        </div>
      )
    },
    [isActive, toggle],
  )

  useOnClickOutside({ ref, handler: closeOnOutsideClick ? close : undefined, disableListener: !isActive })
  useKeyPressListener({ keyHandlers: { Escape: closeOnEsc ? close : undefined }, disableListener: !isActive })
  return {
    Dropdown: DropdownComponent,
    toggleDropdown: toggle,
    closeDropdown: close,
    openDropdown: open,
    isOpen: isActive,
  }
}
