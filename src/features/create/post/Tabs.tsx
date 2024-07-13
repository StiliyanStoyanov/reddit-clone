import { Description, Image, Link } from '@/assets/svg'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { setType, PostType } from '../postSlice'
import classNames from 'classnames'
import { TabProps, Tab } from '@/common/Tab'

type TabContent = {
  id: PostType
  Icon: JSX.Element
  text: string
  tabProps?: TabProps
}
const TabsContent: TabContent[] = [
  { id: 'post', Icon: <Description />, text: 'Post', tabProps: { className: 'shape-top-left-very-small' } },
  { id: 'image', Icon: <Image />, text: 'Image', tabProps: { className: 'outline-x' } },
  { id: 'link', Icon: <Link />, text: 'Link', tabProps: { className: 'shape-top-right-very-small' } },
] as const

export const Tabs = () => {
  const dispatch = useAppDispatch()
  const activeTabId = useAppSelector((state) => state.post.type)
  return (
    <div className="flex h-55px outline-bottom">
      {TabsContent.map(({ id, Icon, text, tabProps }) => {
        const { className, ...remainingTabProps } = tabProps || {}
        return (
          <Tab
            key={id}
            variant={'secondary'}
            onClick={() => dispatch(setType(id))}
            isActive={activeTabId === id}
            className={classNames('flex-center grow-1 overlay fixed-background', className)}
            {...remainingTabProps}
          >
            {Icon}
            <span>{text}</span>
          </Tab>
        )
      })}
    </div>
  )
}
