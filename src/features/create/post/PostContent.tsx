import { TextareaAutosize } from '@/common/TextareaAutosize'
import { useAppDispatch } from '@/hooks'
import { setContent } from '../postSlice'

export const PostContent = () => {
  const dispatch = useAppDispatch()

  return (
    <TextareaAutosize
      id="post"
      placeholder="Text (optional)"
      rows={6}
      onChange={(event) => dispatch(setContent({ type: 'post', content: event.target.value }))}
      className="w-100p font-16 shape-very-small p-8 outline"
    />
  )
}
