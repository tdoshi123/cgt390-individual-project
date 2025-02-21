import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/images/cosmobucks.webp'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
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
    </nav>
  )
}

export default Navbar
