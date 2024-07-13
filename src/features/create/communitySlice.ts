import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const communitySlice = createSlice({
  name: 'community',
  initialState: {},
  reducers: {
    set: (_, action: PayloadAction<string>) => action.payload,
  },
})

export default communitySlice.reducer
