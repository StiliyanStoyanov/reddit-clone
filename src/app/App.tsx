import { Modals } from '@/features/modal/Modals'
import { Navigation } from '@/features/navigation/Navigation'
import { CreatePost } from '@/features/create/post/CreatePost'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div id="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Homepage</div>} />
        <Route path="/submit" element={<CreatePost />} />
        <Route path="/community/create" element={<div>Create community</div>} />
      </Routes>
      <Modals />
    </div>
  )
}

export default App
