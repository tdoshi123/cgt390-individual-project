import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import SearchBar from './SearchBar'
import LightButton from './LightButton'
import '../styles/Navbar.css'
import logo from '../assets/images/cosmobucks.webp'

function Navbar({ onSearch }) {
  const location = useLocation()
  const { isLightMode } = useTheme()

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
          <SearchBar onSearch={onSearch} />
          <LightButton />
        </div>
      </nav>
    </>
  )
}

export default Navbar
