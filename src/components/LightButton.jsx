import { useTheme } from '../context/ThemeContext'

function LightButton() {
  const { isLightMode, toggleTheme } = useTheme()

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle"
      aria-label={`Switch to ${isLightMode ? 'dark' : 'light'} mode`}
    >
      {isLightMode ? 'DARK' : 'LIGHT'}
    </button>
  )
}

export default LightButton