import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/images/cosmobucks.webp'

function Navbar({ onSearch }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { isLightMode, toggleTheme } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchTerm(value)
    
    if (location.pathname !== '/menu') {
      navigate('/menu')
    }
    
    onSearch(value)
  }

  return (
    <>
      <nav className={`navbar ${isLightMode ? 'light' : 'dark'}`}>
        <img src={logo} alt="Cosmobucks Logo" className="navbar-logo" />
        <ul>
          <li>
            <Link 
              to="/menu" 
              className={`navbar-link ${location.pathname === '/menu' ? 'active' : ''}`}
            >
              MENU
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="navbar-right">
          <div className="search-container desktop-search">
            <input 
              type="search" 
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Find a product" 
              className="search-input"
              aria-label="Search products"
            />
          </div>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label={`Switch to ${isLightMode ? 'dark' : 'light'} mode`}
          >
            {isLightMode ? 'DARK' : 'LIGHT'}
          </button>
        </div>
      </nav>
      <div className="mobile-search-container">
        <div className="search-container">
          <input 
            type="search" 
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Find a product" 
            className="search-input"
            aria-label="Search products"
          />
        </div>
      </div>
    </>
  )
}

export default Navbar
