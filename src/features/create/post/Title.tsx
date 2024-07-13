import { useAppDispatch, useAppSelector } from '@/hooks'
import { selectTitle, setTitle } from '../postSlice'
import { TextareaAutosize } from '@/common/TextareaAutosize'

const maxLength = 200
export const Title = () => {
  const dispatch = useAppDispatch()
  const title = useAppSelector(selectTitle)

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(setTitle(e.target.value))

  return (
    <div className="relative">
      <TextareaAutosize
        id="title"
        placeholder="Title"
        rows={1}
        maxLength={maxLength}
        onChange={handleTitleChange}
        className="w-100p font-16 shape-very-small p-8 pr-60 outline"
      />
      <span className="absolute font-12 top-8 right-8">{title.length}/200</span>
    </div>
  )
}
