import { TextareaAutosize } from '@/common/TextareaAutosize'
import { useAppDispatch } from '@/hooks'
import { setContent } from '../postSlice'

export const LinkContent = () => {
  const dispatch = useAppDispatch()

  return (
    <TextareaAutosize
      id="post"
      placeholder="Url"
      rows={1}
      onChange={(event) => dispatch(setContent({ type: 'link', content: event.target.value }))}
      className="w-100p font-16 shape-very-small p-8 outline"
    />
  )
}
