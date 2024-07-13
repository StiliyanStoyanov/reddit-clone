import { useAppSelector } from '@/hooks'
import { PostType, selectType } from '../postSlice'
import { PostContent } from './PostContent'
import { ImageContent } from './ImageContent'
import { LinkContent } from './LinkContent'

const ContentMap: { [key in PostType]: JSX.Element } = {
  post: <PostContent />,
  image: <ImageContent />,
  link: <LinkContent />,
}

export const ContentByType = () => {
  const type = useAppSelector(selectType)
  return ContentMap[type]
}
