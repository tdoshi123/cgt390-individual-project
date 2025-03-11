import { useState, useEffect } from 'react'
import '../styles/Cards.css'
import products from '../data/products'

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
  'mocha-frappuccino': () => import('../assets/images/products/drinks/frappuccino/mocha-frappuccino.jpg'),
  'coffee-frappuccino': () => import('../assets/images/products/drinks/frappuccino/coffee-frappuccino.jpg'),
  'caramel-frappuccino': () => import('../assets/images/products/drinks/frappuccino/caramel-frappuccino.jpg'),
  'pistachio-frappuccino': () => import('../assets/images/products/drinks/frappuccino/pistachio-frappuccino.jpg'),

  // Iced Energy
  'melon-burst-ie': () => import('../assets/images/products/drinks/icedenergy/melon-burst-ie.jpg'),
  'tropical-citrus-ie': () => import('../assets/images/products/drinks/icedenergy/tropical-citrus-ie.jpg'),

  // Hot Chocolate, Lemonade, and More
  'hot-chocolate': () => import('../assets/images/products/drinks/hclm/hot-chocolate.jpg'),
  'lemonade': () => import('../assets/images/products/drinks/hclm/lemonade.jpg'),
  'cold-milk': () => import('../assets/images/products/drinks/hclm/cold-milk.jpg'),

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
  "butter-croissant": () => import('../assets/images/products/food/bakery/butter-croissant.jpg'),
  "chocolate-croissant": () => import('../assets/images/products/food/bakery/chocolate-croissant.jpg'),
  "cheese-danish": () => import('../assets/images/products/food/bakery/cheese-danish.jpg'),
  "iced-lemon-cake": () => import('../assets/images/products/food/bakery/iced-lemon-cake.jpg'),
  "cinnamon-coffee-cake": () => import('../assets/images/products/food/bakery/cinnamon-coffee-cake.jpg'),
  "blueberry-muffin": () => import('../assets/images/products/food/bakery/blueberry-muffin.jpg'),
  "vanilla-bean-scone": () => import('../assets/images/products/food/bakery/vanilla-bean-scone.jpg'),
  "plain-bagel": () => import('../assets/images/products/food/bakery/plain-bagel.jpg'),
  "everything-bagel": () => import('../assets/images/products/food/bakery/everything-bagel.jpg'),

  // Lunch
  "crispy-grilled-cheese-on-sourdough": () => import('../assets/images/products/food/lunch/crispy-grilled-cheese-on-sourdough.jpg'),
  "ham-swiss-on-baguette": () => import('../assets/images/products/food/lunch/ham-swiss-on-baguette.jpg'),
  "turkey-provolone-pesto-ciabatta": () => import('../assets/images/products/food/lunch/turkey-provolone-pesto-ciabatta.jpg'),
  "tomato-mozzarella-on-focacia": () => import('../assets/images/products/food/lunch/tomato-mozzarella-on-focacia.jpg'),
  "spicy-falafel-pocket": () => import('../assets/images/products/food/lunch/spicy-falafel-pocket.jpg'),

  // Treats
  "birthday-cake-pop": () => import('../assets/images/products/food/treats/birthday-cake-pop.jpg'),
  "chocolate-cake-pop": () => import('../assets/images/products/food/treats/chocolate-cake-pop.jpg'),
  "chocolate-chip-cookie": () => import('../assets/images/products/food/treats/chocolate-chip-cookie.jpg'),
  "double-chocolate-brownie": () => import('../assets/images/products/food/treats/double-chocolate-brownie.jpg'),

  // Whole Bean
  "veranda-blend": () => import('../assets/images/products/athomecoffee/wholebean/veranda-blend.jpg'), 
  "cosmobucks-blonde-espresso-roast": () => import('../assets/images/products/athomecoffee/wholebean/cosmobucks-blonde-espresso-roast.jpg'),
  "pike-place-roast": () => import('../assets/images/products/athomecoffee/wholebean/pike-place-roast.jpg'),
  "decaf-pike-place-roast": () => import('../assets/images/products/athomecoffee/wholebean/decaf-pike-place-roast.jpg'),
  "caffe-verona": () => import('../assets/images/products/athomecoffee/wholebean/caffe-verona.jpg'),
  "espresso-roast": () => import('../assets/images/products/athomecoffee/wholebean/espresso-roast.jpg'),
  "italian-roast": () => import('../assets/images/products/athomecoffee/wholebean/italian-roast.jpg'),

  // VIA Instant
  "via-sweetened-iced-coffee": () => import('../assets/images/products/athomecoffee/viainstant/via-sweetened-iced-coffee.jpg'),
  "via-veranda-blend": () => import('../assets/images/products/athomecoffee/viainstant/via-veranda-blend.jpg'),
  "cosmobucks-via-instant-pike-place-roast": () => import('../assets/images/products/athomecoffee/viainstant/cosmobucks-via-instant-pike-place-roast.jpg'),
  "via-italian-roast": () => import('../assets/images/products/athomecoffee/viainstant/via-italian-roast.jpg'),

  // Shopping Bag
  "small-shopping-bag": () => import('../assets/images/products/athomecoffee/shoppingbag/small-shopping-bag.jpg')
}

function Cards({ category, subcategory, searchTerm, showAll }) {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagesToLoad = {};
        
        if (searchTerm) {
          const allProducts = Object.values(products).flat();
          const filteredProducts = allProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          
          for (const item of filteredProducts) {
            if (images[item.image]) {
              const module = await images[item.image]();
              imagesToLoad[item.image] = module.default;
            }
          }
        } else if (showAll || (category && !subcategory)) {
          const relevantSubcategories = category === 'Food' 
            ? ['Breakfast', 'Bakery', 'Lunch', 'Treats']
            : Object.keys(products);

          for (const subcat of relevantSubcategories) {
            if (products[subcat]) {
              for (const item of products[subcat]) {
                if (images[item.image]) {
                  const module = await images[item.image]();
                  imagesToLoad[item.image] = module.default;
                }
              }
            }
          }
        } else if (subcategory && products[subcategory]) {
          for (const item of products[subcategory]) {
            if (images[item.image]) {
              const module = await images[item.image]();
              imagesToLoad[item.image] = module.default;
            }
          }
        }
        
        setLoadedImages(imagesToLoad);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, [category, subcategory, showAll, searchTerm]);

  const filterProducts = () => {
    if (searchTerm) {
      const allProducts = Object.values(products).flat();
      return allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (showAll) {
      return null;
    }

    if (subcategory && products[subcategory]) {
      return products[subcategory];
    }

    return [];
  };

  const renderProducts = () => {
    if (searchTerm) {
      const filteredProducts = filterProducts();
      return (
        <div className="products-grid">
          {filteredProducts.map((item, index) => (
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
      );
    }

    if (showAll) {
      const categories = {
        'Drinks': ['Hot Coffee', 'Cold Coffee', 'Hot Tea', 'Cold Tea', 'Refreshers', 'Frappuccino', 'Iced Energy', 'Hot Chocolate, Lemonade, and More'],
        'Food': ['Breakfast', 'Bakery', 'Lunch', 'Treats'],
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
    } else if (category === 'At Home Coffee' && !subcategory) {
      const athomeCoffeeSubcategories = ['Whole Bean', 'VIA Instant', 'Shopping Bag'];
      
      return (
        <div>
          {athomeCoffeeSubcategories.map(subcategoryName => (
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
      );
    } else if (category === 'Drinks' && !subcategory) {
      const drinkSubcategories = ['Hot Coffee', 'Cold Coffee', 'Hot Tea', 'Cold Tea', 'Refreshers', 'Frappuccino', 'Iced Energy', 'Hot Chocolate, Lemonade, and More'];
      
      return (
        <div>
          {drinkSubcategories.map(subcategoryName => (
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
      );
    } else if (category === 'Food' && !subcategory) {
      const foodSubcategories = ['Breakfast', 'Bakery', 'Lunch', 'Treats'];
      
      return (
        <div>
          {foodSubcategories.map(subcategoryName => (
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
