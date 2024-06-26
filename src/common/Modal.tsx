import { useRef, useEffect, MouseEventHandler } from 'react'
import { CloseButton } from './CloseButton'
import { Portal } from './Portal'
import { useKeyPressListener } from '@/hooks/useKeyPressHandler'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

export interface ModalProps extends React.PropsWithChildren {
  isOpen?: boolean
  onClickOutside?: (e?: MouseEvent) => void
  onEscapeKeyPress?: (e?: KeyboardEvent) => void
  onCloseButtonClick?: MouseEventHandler<HTMLButtonElement>
  overlayContainerProps?: React.ComponentProps<'div'>
  containerProps?: React.ComponentProps<'div'>
  closeButtonProps?: React.ComponentProps<'button'>
  portalElement?: HTMLElement
}

export const Modal = ({
  isOpen,
  onClickOutside,
  onEscapeKeyPress,
  onCloseButtonClick,
  overlayContainerProps,
  containerProps,
  closeButtonProps,
  portalElement,
  children,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  useOnClickOutside({ ref, handler: onClickOutside, disableListener: !isOpen })
  useKeyPressListener({ keyHandlers: { Escape: onEscapeKeyPress }, disableListener: !isOpen })
  if (!isOpen) return null
  return (
    <Portal portalElement={portalElement}>
      <div className="page-overlay" {...overlayContainerProps}>
        <div className="absolute-center modal-default-size" ref={ref} {...containerProps}>
          <CloseButton onClick={onCloseButtonClick} {...closeButtonProps} />
          {children}
        </div>
      </div>
    </Portal>
  )
}
