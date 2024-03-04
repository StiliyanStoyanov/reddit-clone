import { RootState } from '@app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalIds } from './types'

const modalSlice = createSlice({
  name: 'modal',
  initialState: null as ModalIds,
  reducers: {
    setModalId: (_, action: PayloadAction<ModalIds>) => action.payload,
  },
})

export const selectModalId = (state: RootState) => state.modalId
export const { setModalId } = modalSlice.actions
export default modalSlice.reducer
