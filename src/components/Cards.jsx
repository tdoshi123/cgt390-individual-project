import { useState, useEffect } from 'react'
import '../styles/Cards.css'
import products from '../data/products'

// Import all images
const images = {
  // Hot Coffee
  'caffe-americano': () => import('../assets/images/products/drinks/hotcoffee/caffe-americano.jpg'),
  'cappuccino': () => import('../assets/images/products/drinks/hotcoffee/cappuccino.jpg'),
  'espresso': () => import('../assets/images/products/drinks/hotcoffee/espresso.jpg'),
  'flat-white': () => import('../assets/images/products/drinks/hotcoffee/flat-white.jpg'),
  'caramel-macchiato': () => import('../assets/images/products/drinks/hotcoffee/caramel-macchiato.jpg'),
  'caffe-mocha': () => import('../assets/images/products/drinks/hotcoffee/caffe-mocha.jpg'),
  
  // Cold Coffee
  'cb': () => import('../assets/images/products/drinks/coldcoffee/cb.jpg'),
  'chocolate-cream-cb': () => import('../assets/images/products/drinks/coldcoffee/chocolate-cream-cb.jpg'),
  'pistachio-cream-cb': () => import('../assets/images/products/drinks/coldcoffee/pistachio-cream-cb.jpg'),
  'salted-caramel-cream-cb': () => import('../assets/images/products/drinks/coldcoffee/salted-caramel-cream-cb.jpg'),
  'vanilla-sweet-cream-cb': () => import('../assets/images/products/drinks/coldcoffee/vanilla-sweet-cream-cb.jpg'),

  // Hot Tea
  'chai-latte': () => import('../assets/images/products/drinks/hottea/chai-latte.jpg'),
  'matcha-latte': () => import('../assets/images/products/drinks/hottea/matcha-latte.jpg'),
  'honey-citrus-mint-tea': () => import('../assets/images/products/drinks/hottea/honey-citrus-mint-tea.jpg'),
  'royal-english-breakfast-tea': () => import('../assets/images/products/drinks/hottea/royal-english-breakfast-tea.jpg'),
  'earl-grey-tea': () => import('../assets/images/products/drinks/hottea/earl-grey-tea.jpg'),
  'chamomile-mint-blossom-tea': () => import('../assets/images/products/drinks/hottea/chamomile-mint-blossom-tea.jpg'),
  'chai-tea': () => import('../assets/images/products/drinks/hottea/chai-tea.jpg'),

  // Cold Tea
  'iced-chai-latte': () => import('../assets/images/products/drinks/coldtea/iced-chai-latte.jpg'),
  'iced-matcha-latte': () => import('../assets/images/products/drinks/coldtea/iced-matcha-latte.jpg'),
  'iced-royal-english-breakfast-latte': () => import('../assets/images/products/drinks/coldtea/iced-royal-english-breakfast-latte.jpg'),
  'iced-black-tea': () => import('../assets/images/products/drinks/coldtea/iced-black-tea.jpg'),
  'iced-green-tea': () => import('../assets/images/products/drinks/coldtea/iced-green-tea.jpg'),
  'iced-passion-tango-tea': () => import('../assets/images/products/drinks/coldtea/iced-passion-tango-tea.jpg'),

  // Refreshers
  'strawberry-acai-lemonade-refresher': () => import('../assets/images/products/drinks/refreshers/strawberry-acai-lemonade-refresher.jpg'),
  'mango-dragonfruit-lemonade-refresher': () => import('../assets/images/products/drinks/refreshers/mango-dragonfruit-lemonade-refresher.jpg'),
  'pink-drink': () => import('../assets/images/products/drinks/refreshers/pink-drink.jpg'),
  'dragon-drink': () => import('../assets/images/products/drinks/refreshers/dragon-drink.jpg'),
  'strawberry-acai-refresher': () => import('../assets/images/products/drinks/refreshers/strawberry-acai-refresher.jpg'),
  'mango-dragonfruit-refresher': () => import('../assets/images/products/drinks/refreshers/mango-dragonfruit-refresher.jpg'),

  // Frappuccino

  // Iced Energy

  // Hot Chocolate, Lemonade, and More

  // Bottled Beverages

  // Breakfast
  'egg-pesto-mozzarella-sandwich': () => import('../assets/images/products/food/breakfast/egg-pesto-mozzarella-sandwich.jpg'),
  'sausage-cheddar-egg-sandwich': () => import('../assets/images/products/food/breakfast/sausage-cheddar-egg-sandwich.jpg'),
  'turkeybacon-cheddar-eggwhite-sandwich': () => import('../assets/images/products/food/breakfast/turkeybacon-cheddar-eggwhite-sandwich.jpg'),
  'bacon-sausage-egg-wrap': () => import('../assets/images/products/food/breakfast/bacon-sausage-egg-wrap.jpg'),
  'spinach-feta-eggwhite-wrap': () => import('../assets/images/products/food/breakfast/spinach-feta-eggwhite-wrap.jpg'),
  'bacon-gruyere-egg-bites': () => import('../assets/images/products/food/breakfast/bacon-gruyere-egg-bites.jpg'),
  'eggwhite-roastedredpepper-egg-bites': () => import('../assets/images/products/food/breakfast/eggwhite-roastedredpepper-egg-bites.jpg'),
  'berry-trio-parfait': () => import('../assets/images/products/food/breakfast/berry-trio-parfait.jpg'),

  // Bakery

  // Lunch

  // Treats

  // Snacks

  // Whole Bean

  // VIA Instant

  // Shopping Bag
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
