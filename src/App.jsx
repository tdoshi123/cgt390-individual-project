import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/menu" replace />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
