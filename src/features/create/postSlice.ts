/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from '@app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CreatePostState {
  type: 'post' | 'link' | 'image'
  title: string
  post: string
  link: string
  image: string
}
export type PostType = CreatePostState['type']

const initialState = {
  type: 'post',
  title: '',
  post: '',
  link: '',
  image: '',
} satisfies CreatePostState as CreatePostState
const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setType(state, action: PayloadAction<PostType>) {
      state.type = action.payload
    },
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload
    },
    setContent(state, action: PayloadAction<{ type: PostType; content: string }>) {
      const { type, content } = action.payload
      state[type] = content
    },
  },
})
export const selectTitle = (state: RootState) => state.post.title
export const selectType = (state: RootState) => state.post.type
export const { setType, setTitle, setContent } = postSlice.actions
export default postSlice.reducer
