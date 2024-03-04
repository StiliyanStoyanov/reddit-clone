import { useCallback } from 'react'
import { Modal, ModalProps } from '@/common/Modal'
import useToggle from '@/hooks/useToggle'

export type UseModalOptions = {
  isOpen?: boolean
  closeOnOutsideClick?: boolean
  closeOnEsc?: boolean
}
const propsDefault = { isOpen: false, closeOnOutsideClick: true, closeOnEsc: true }
export function useModal({ isOpen, closeOnOutsideClick = true, closeOnEsc = true }: UseModalOptions = propsDefault) {
  const [isActive, { close, open, toggle }] = useToggle(isOpen)

  const ModalCallback = useCallback(
    ({ children, ...rest }: ModalProps) => {
      console.log('here')
      if (!isActive) return null
      const props = {
        ...(closeOnOutsideClick && { onClickOutside: close }),
        ...(closeOnEsc && { onEscapePress: close }),
        onCloseButtonClick: close,
        containerProps: { className: '' },
        ...rest,
      }
      return <Modal {...props}>{children}</Modal>
    },
    [isActive, close, closeOnOutsideClick, closeOnEsc],
  )

  return { isOpen: isActive, Modal: ModalCallback, openModal: open, closeModal: close, toggleModal: toggle }
}
