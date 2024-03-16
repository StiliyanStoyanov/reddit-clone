import { Modals } from '@/features/modal/Modals'
import { Navigation } from '@/features/navigation/Navigation'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div id="app">
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Refactor in progress</div>} />
      </Routes>
      <Modals />
    </div>
  )
}

export default App
