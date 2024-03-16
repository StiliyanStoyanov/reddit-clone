import { RootState } from '@app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalIds } from './types'

const modalSlice = createSlice({
  name: 'modal',
  initialState: null as ModalIds,
  reducers: {
    setModal: (_, action: PayloadAction<ModalIds>) => action.payload,
  },
})

export const selectModal = (state: RootState) => state.modal
export const { setModal } = modalSlice.actions
export default modalSlice.reducer
