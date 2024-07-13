import { Tabs } from './Tabs'
import { Title } from './Title'
import { ContentByType } from './ContentByType'
import './post.css'

export const CreatePost = () => {
  return (
    <div className="create-post-container">
      <h1 className="outline-bottom">Create Post</h1>
      <div className="surface-container w-50p my-8 p-8">Selector</div>
      <div className="surface-container shape-very-small">
        <Tabs />
        <div className="surface-container p-16">
          <Title />
          <ContentByType />
        </div>
      </div>
    </div>
  )
}
