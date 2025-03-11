import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SearchBar({ onSearch }) {
  const location = useLocation()
  const navigate = useNavigate()
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

export default SearchBar