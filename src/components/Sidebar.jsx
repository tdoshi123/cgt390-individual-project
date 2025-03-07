import { useState, useEffect } from 'react'
import '../styles/Sidebar.css'

function Sidebar({ onCategorySelect, onSubcategorySelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleCategoryClick = (category) => {
    onCategorySelect(category)
    onSubcategorySelect('')
    setSelectedCategory(category)
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const handleSubcategoryClick = (subcategory) => {
    onSubcategorySelect(subcategory)
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const renderMenu = () => (
    <ul className={`sidebar-menu ${isOpen ? 'mobile' : ''}`}>
      <li>
        <div className="sidebar-item" onClick={() => handleCategoryClick('Drinks')}>DRINKS</div>
        {(!isMobile || selectedCategory === 'Drinks') && (
          <ul className="sidebar-submenu">
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Hot Coffee')}>Hot Coffee</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Cold Coffee')}>Cold Coffee</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Hot Tea')}>Hot Tea</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Cold Tea')}>Cold Tea</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Refreshers')}>Refreshers</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Frappuccino')}>Frappuccino</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Iced Energy')}>Iced Energy</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Hot Chocolate, Lemonade, and More')}>Hot Chocolate, Lemonade, and More</li>
          </ul>
        )}
      </li>
      <li>
        <div className="sidebar-item" onClick={() => handleCategoryClick('Food')}>FOOD</div>
        {(!isMobile || selectedCategory === 'Food') && (
          <ul className="sidebar-submenu">
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Breakfast')}>Breakfast</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Bakery')}>Bakery</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Lunch')}>Lunch</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Treats')}>Treats</li>
          </ul>
        )}
      </li>
      <li>
        <div className="sidebar-item" onClick={() => handleCategoryClick('At Home Coffee')}>AT HOME COFFEE</div>
        {(!isMobile || selectedCategory === 'At Home Coffee') && (
          <ul className="sidebar-submenu">
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Whole Bean')}>Whole Bean</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('VIA Instant')}>VIA Instant</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Shopping Bag')}>Shopping Bag</li>
          </ul>
        )}
      </li>
    </ul>
  )

  return (
    <>
      <div className="sidebar">
        {renderMenu()}
      </div>
      <div className="sidebar-dropdown">
        <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
          {selectedCategory || 'Select Category'} ▼
        </button>
        {isOpen && renderMenu()}
      </div>
    </>
  )
}

export default Sidebar
