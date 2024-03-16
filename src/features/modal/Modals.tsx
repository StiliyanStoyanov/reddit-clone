import { selectModal, setModal } from './modalSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Modal } from '@/common/Modal'
import { contentMap } from './contentMap'

export const Modals = () => {
  const dispatch = useAppDispatch()
  const id = useAppSelector(selectModal)

  const closeModal = () => dispatch(setModal(null))

  if (!id) return null
  const { Component, modalProps, componentProps } = contentMap[id]

  return (
    <>
      <Modal
        isOpen={true}
        onClickOutside={closeModal}
        onEscapeKeyPress={closeModal}
        onCloseButtonClick={closeModal}
        {...modalProps}
      >
        <Component {...componentProps} />
      </Modal>
    </>
  )
}
