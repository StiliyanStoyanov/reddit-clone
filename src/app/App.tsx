import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div id="app">
      <Routes>
        <Route
          path="/"
          element={<div style={{ color: 'white' }}>Refactor in progress</div>}
        />
      </Routes>
    </div>
  )
}

export default App
