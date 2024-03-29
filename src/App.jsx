import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
// import { Header } from './Header'
import { Content } from './Content'
import { About } from './About'
import { Feed } from './Feed'
import { CustomCursor } from "./CustomCursor";
import "./App.css"

function App() {
  
  return (
    <div>
      <Router>
      < CustomCursor />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
