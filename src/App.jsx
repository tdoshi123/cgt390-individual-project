import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import './App.css'

function AppContent() {
  const { isLightMode } = useTheme()

  useEffect(() => {
    document.body.setAttribute('data-theme', isLightMode ? 'light' : 'dark')
  }, [isLightMode])

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

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
