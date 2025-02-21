import '../styles/Sidebar.css'

function Sidebar({ onCategorySelect, onSubcategorySelect }) {
  const handleCategoryClick = (category) => {
    onCategorySelect(category)
    onSubcategorySelect('')
  }

  const handleSubcategoryClick = (subcategory) => {
    onSubcategorySelect(subcategory)
  }

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <div className="sidebar-item" onClick={() => handleCategoryClick('Drinks')}>DRINKS</div>
          <ul className="sidebar-submenu">
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Hot Coffee')}>Hot Coffee</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Cold Coffee')}>Cold Coffee</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Hot Tea')}>Hot Tea</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Cold Tea')}>Cold Tea</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Refreshers')}>Refreshers</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Frappuccino')}>Frappuccino</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Iced Energy')}>Iced Energy</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Hot Chocolate, Lemonade, and More')}>Hot Chocolate, Lemonade, and More</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Bottled Beverages')}>Bottled Beverages</li>
          </ul>
        </li>
        <li>
          <div className="sidebar-item" onClick={() => handleCategoryClick('Food')}>FOOD</div>
          <ul className="sidebar-submenu">
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Breakfast')}>Breakfast</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Bakery')}>Bakery</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Lunch')}>Lunch</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Treats')}>Treats</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Snacks')}>Snacks</li>
          </ul>
        </li>
        <li>
          <div className="sidebar-item" onClick={() => handleCategoryClick('At Home Coffee')}>AT HOME COFFEE</div>
          <ul className="sidebar-submenu">
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Whole Bean')}>Whole Bean</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('VIA Instant')}>VIA Instant</li>
            <li className="sidebar-subitem" onClick={() => handleSubcategoryClick('Shopping Bag')}>Shopping Bag</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
