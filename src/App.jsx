import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// import { Header } from './Header'
import { Content } from './Content'
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
