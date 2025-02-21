import { useState, useEffect } from 'react'
import '../styles/Cards.css'
import products from '../data/products'

// Import all images
const images = {
  // Hot Coffee
  'caffe-americano': () => import('../assets/images/products/hotcoffee/caffe-americano.jpg'),
  'cappuccino': () => import('../assets/images/products/hotcoffee/cappuccino.jpg'),
  'espresso': () => import('../assets/images/products/hotcoffee/espresso.jpg'),
  'flat-white': () => import('../assets/images/products/hotcoffee/flat-white.jpg'),
  'caramel-macchiato': () => import('../assets/images/products/hotcoffee/caramel-macchiato.jpg'),
  'caffe-mocha': () => import('../assets/images/products/hotcoffee/caffe-mocha.jpg'),
  
  // Cold Coffee
  'cb': () => import('../assets/images/products/coldcoffee/cb.jpg'),
  'chocolate-cream-cb': () => import('../assets/images/products/coldcoffee/chocolate-cream-cb.jpg'),
  'pistachio-cream-cb': () => import('../assets/images/products/coldcoffee/pistachio-cream-cb.jpg'),
  'salted-caramel-cream-cb': () => import('../assets/images/products/coldcoffee/salted-caramel-cream-cb.jpg'),
  'vanilla-sweet-cream-cb': () => import('../assets/images/products/coldcoffee/vanilla-sweet-cream-cb.jpg'),

  // Hot Tea
  'chai-latte': () => import('../assets/images/products/hottea/chai-latte.jpg'),
  'matcha-latte': () => import('../assets/images/products/hottea/matcha-latte.jpg'),
  'honey-citrus-mint-tea': () => import('../assets/images/products/hottea/honey-citrus-mint-tea.jpg'),
  'royal-english-breakfast-tea': () => import('../assets/images/products/hottea/royal-english-breakfast-tea.jpg'),
  'earl-grey-tea': () => import('../assets/images/products/hottea/earl-grey-tea.jpg'),
  'chamomile-mint-blossom-tea': () => import('../assets/images/products/hottea/chamomile-mint-blossom-tea.jpg'),
  'chai-tea': () => import('../assets/images/products/hottea/chai-tea.jpg'),

  // Cold Tea
  'iced-chai-latte': () => import('../assets/images/products/coldtea/iced-chai-latte.jpg'),
  'iced-matcha-latte': () => import('../assets/images/products/coldtea/iced-matcha-latte.jpg'),
  'iced-royal-english-breakfast-latte': () => import('../assets/images/products/coldtea/iced-royal-english-breakfast-latte.jpg'),
  'iced-black-tea': () => import('../assets/images/products/coldtea/iced-black-tea.jpg'),
  'iced-green-tea': () => import('../assets/images/products/coldtea/iced-green-tea.jpg'),
  'iced-passion-tango-tea': () => import('../assets/images/products/coldtea/iced-passion-tango-tea.jpg'),
}

function Cards({ category, subcategory, showAll }) {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    // Load all images for current category/subcategory
    const loadImages = async () => {
      const imagesToLoad = {};
      
      if (showAll || category === 'Drinks' && !subcategory) {
        // Load all images
        for (const [cat, items] of Object.entries(products)) {
          for (const item of items) {
            if (images[item.image]) {
              const module = await images[item.image]();
              imagesToLoad[item.image] = module.default;
            }
          }
        }
      } else if (subcategory && products[subcategory]) {
        // Load only subcategory images
        for (const item of products[subcategory]) {
          if (images[item.image]) {
            const module = await images[item.image]();
            imagesToLoad[item.image] = module.default;
          }
        }
      }
      
      setLoadedImages(imagesToLoad);
    };

    loadImages();
  }, [category, subcategory, showAll]);

  const renderProducts = () => {
    if (showAll) {
      const categories = {
        'Drinks': ['Hot Coffee', 'Cold Coffee', 'Hot Tea', 'Cold Tea', 'Refreshers', 'Frappuccino', 'Iced Energy', 'Hot Chocolate, Lemonade, and More', 'Bottled Beverages'],
        'Food': ['Breakfast', 'Bakery', 'Lunch', 'Treats', 'Snacks'],
        'At Home Coffee': ['Whole Bean', 'VIA Instant', 'Shopping Bag']
      };

      return (
        <div>
          {Object.entries(categories).map(([categoryName, subcategories]) => (
            <div key={categoryName} className="category-section">
              <h1 className="category-title">{categoryName}</h1>
              {subcategories.map(subcategoryName => (
                products[subcategoryName]?.length > 0 && (
                  <div key={subcategoryName}>
                    <h2 className="subcategory-title">{subcategoryName}</h2>
                    <div className="products-grid">
                      {products[subcategoryName].map((item, index) => (
                        <div key={index} className="product-card">
                          <div className="product-image-container">
                            {loadedImages[item.image] && (
                              <img 
                                src={loadedImages[item.image]} 
                                alt={item.name} 
                                className="product-image" 
                              />
                            )}
                          </div>
                          <h3 className="product-name">{item.name}</h3>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              ))}
            </div>
          ))}
        </div>
      );
    } else if (category === 'Drinks' && !subcategory) {
      return (
        <div>
          {Object.entries(products).map(([subcategoryName, items]) => (
            items.length > 0 && (
              <div key={subcategoryName}>
                <h2 className="subcategory-title">{subcategoryName}</h2>
                <div className="products-grid">
                  {items.map((item, index) => (
                    <div key={index} className="product-card">
                      <div className="product-image-container">
                        {loadedImages[item.image] && (
                          <img 
                            src={loadedImages[item.image]} 
                            alt={item.name} 
                            className="product-image" 
                          />
                        )}
                      </div>
                      <h3 className="product-name">{item.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      );
    } else if (subcategory && products[subcategory]) {
      return (
        <div>
          <h2 className="subcategory-title">{subcategory}</h2>
          <div className="products-grid">
            {products[subcategory].map((item, index) => (
              <div key={index} className="product-card">
                <div className="product-image-container">
                  {loadedImages[item.image] && (
                    <img 
                      src={loadedImages[item.image]} 
                      alt={item.name} 
                      className="product-image" 
                    />
                  )}
                </div>
                <h3 className="product-name">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="cards-container">
      {renderProducts()}
    </div>
  );
}

export default Cards;
