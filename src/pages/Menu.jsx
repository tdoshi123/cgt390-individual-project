import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Cards from '../components/Cards'
import { useState } from 'react'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (term) => {
    setSearchTerm(term)
    if (term) {
      setSelectedCategory('')
      setSelectedSubcategory('')
    }
  }

  return (
    <div className="app">
      <Navbar onSearch={handleSearch} />
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
              {searchTerm && <span className="breadcrumb-separator">/</span>}
              {searchTerm && <span>Search: {searchTerm}</span>}
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
            searchTerm={searchTerm}
            showAll={!selectedCategory && !selectedSubcategory && !searchTerm}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
