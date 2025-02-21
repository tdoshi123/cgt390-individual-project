import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import { useState } from 'react'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar 
          onCategorySelect={setSelectedCategory}
          onSubcategorySelect={setSelectedSubcategory}
        />
        <div className="content">
          <div className="content-header">
            <span className="breadcrumb">
              Menu
              {selectedCategory && <span className="breadcrumb-separator">/</span>}
              {selectedCategory}
              {selectedSubcategory && <span className="breadcrumb-separator">/</span>}
              {selectedSubcategory}
            </span>
          </div>
          {(selectedCategory && !selectedSubcategory) && (
            <h1 className="content-title">
              {selectedCategory}
            </h1>
          )}
          <Cards 
            category={selectedCategory}
            subcategory={selectedSubcategory}
            showAll={!selectedCategory && !selectedSubcategory}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
