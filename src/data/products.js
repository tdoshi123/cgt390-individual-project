const products = {
  'Hot Coffee': [
    {
      name: "Caffè Americano",
      image: "caffe-americano"
    },
    {
      name: "Cappuccino",
      image: "cappuccino"
    },
    {
      name: "Espresso",
      image: "espresso"
    },
    {
      name: "Flat White",
      image: "flat-white"
    },
    {
      name: "Caramel Macchiato",
      image: "caramel-macchiato"
    },
    {
      name: "Caffè Mocha",
      image: "caffe-mocha"
    }
  ],
  'Cold Coffee': [
    {
      name: "Cold Brew",
      image: "cb"
    },
    {
      name: "Chocolate Cream Cold Brew",
      image: "chocolate-cream-cb"
    },
    {
      name: "Pistachio Cream Cold Brew",
      image: "pistachio-cream-cb"
    },
    {
      name: "Salted Caramel Cream Cold Brew",
      image: "salted-caramel-cream-cb"
    },
    {
      name: "Vanilla Sweet Cream Cold Brew",
      image: "vanilla-sweet-cream-cb"
    }
  ],
  'Hot Tea': [
    {
      name: "Chai Latte",
      image: "chai-latte"
    },
    {
      name: "Matcha Latte",
      image: "matcha-latte"
    },
    {
      name: "Honey Citrus Mint Tea",
      image: "honey-citrus-mint-tea"
    },
    {
      name: "Royal English Breakfast Tea",
      image: "royal-english-breakfast-tea"
    },
    {
      name: "Earl Grey Tea",
      image: "earl-grey-tea"
    },
    {
      name: "Chamomile Mint Blossom Tea",
      image: "chamomile-mint-blossom-tea"
    },
    {
      name: "Chai Tea",
      image: "chai-tea"
    }
  ],
  'Cold Tea': [
    {
      name: "Iced Chai Latte",
      image: "iced-chai-latte"
    },
    {
      name: "Iced Matcha Latte",
      image: "iced-matcha-latte"
    },
    {
      name: "Iced Royal English Breakfast Latte",
      image: "iced-royal-english-breakfast-latte"
    },
    {
      name: "Iced Black Tea",
      image: "iced-black-tea"
    },
    {
      name: "Iced Green Tea",
      image: "iced-green-tea"
    },
    {
      name: "Iced Passion Tango Tea",
      image: "iced-passion-tango-tea"
    },
  ],
  'Refreshers': [
    {
      name: "Strawberry Acai Lemonade Refresher",
      image: "strawberry-acai-lemonade-refresher"
    },
    {
      name: "Mango Dragonfruit Lemonade Refresher",
      image: "mango-dragonfruit-lemonade-refresher"
    },
    {
      name: "Pink Drink",
      image: "pink-drink"
    },
    {
      name: "Dragon Drink",
      image: "dragon-drink"
    },
    {
      name: "Strawberry Acai Refresher",
      image: "strawberry-acai-refresher"
    },
    {
      name: "Mango Dragonfruit Refresher",
      image: "mango-dragonfruit-refresher"
    }
  ],
  'Frappuccino': [
    {
      name: "Mocha Frappuccino",
      image: "mocha-frappuccino"
    },
    {
      name: "Coffee Frappuccino",
      image: "coffee-frappuccino"
    },
    {
      name: "Caramel Frappuccino",
      image: "caramel-frappuccino"
    },
    {
      name: "Pistachio Frappuccino",
      image: "pistachio-frappuccino"
    }
  ],
  'Iced Energy': [
    {
      name: "Melon Burst Iced Energy",
      image: "melon-burst-ie"
    },
    {
      name: "Tropical Citrus Iced Energy",
      image: "tropical-citrus-ie"
    }
  ],
  'Hot Chocolate, Lemonade, and More': [
    {
      name: "Hot Chocolate",
      image: "hot-chocolate"
    },
    {
      name: "Lemonade",
      image: "lemonade"
    },
    {
      name: "Cold Milk",
      image: "cold-milk"
    }
  ],

  'Breakfast': [
    {
      name: "Egg, Pesto, & Mozzarella Sandwich",
      image: "egg-pesto-mozzarella-sandwich"
    },
    {
      name: "Sausage, Cheddar, & Egg Sandwich",
      image: "sausage-cheddar-egg-sandwich"
    },
    {
      name: "Turkey Bacon, Cheddar, & Egg White Sandwich",
      image: "turkeybacon-cheddar-eggwhite-sandwich"
    },
    {
      name: "Bacon, Sausage, & Egg Wrap",
      image: "bacon-sausage-egg-wrap"
    },
    {
      name: "Spinach, Feta, & Egg White Wrap",
      image: "spinach-feta-eggwhite-wrap"
    },
    {
      name: "Bacon, Gruyere, & Egg Bites",
      image: "bacon-gruyere-egg-bites"
    },
    {
      name: "Egg White, Roasted Red Pepper, & Egg Bites",
      image: "eggwhite-roastedredpepper-egg-bites"
    },
    {
      name: "Berry Trio Parfait",
      image: "berry-trio-parfait"
    }
  ],
  'Bakery': [
    {
      name: "Butter Croissant",
      image: "butter-croissant"
    },
    {
      name: "Chocolate Croissant",
      image: "chocolate-croissant"
    },
    {
      name: "Cheese Danish",
      image: "cheese-danish"
    },
    {
      name: "Iced Lemon Cake",
      image: "iced-lemon-cake"
    },
    {
      name: "Cinnamon Coffee Cake",
      image: "cinnamon-coffee-cake"
    },
    {
      name: "Blueberry Muffin",
      image: "blueberry-muffin"
    },
    {
      name: "Vanilla Bean Scone",
      image: "vanilla-bean-scone"
    },
    {
      name: "Plain Bagel",
      image: "plain-bagel"
    },
    {
      name: "Everything Bagel",
      image: "everything-bagel"
    }
  ],
  'Lunch': [
    {
      name: "Crispy Grilled Cheese on Sourdough",
      image: "crispy-grilled-cheese-on-sourdough"
    },
    {
      name: "Ham & Swiss on Baguette",
      image: "ham-swiss-on-baguette"
    },
    {
      name: "Turkey, Provolone, & Pesto on Ciabatta",
      image: "turkey-provolone-pesto-ciabatta"
    },
    {
      name: "Tomato & Mozzarella on Focacia",
      image: "tomato-mozzarella-on-focacia"
    },
    {
      name: "Spicy Falafel Pocket",
      image: "spicy-falafel-pocket"
    }
  ],
  'Treats': [
    {
      name: "Birthday Cake Pop",
      image: "birthday-cake-pop"
    },
    {
      name: "Chocolate Cake Pop",
      image: "chocolate-cake-pop"
    },
    {
      name: "Chocolate Chip Cookie",
      image: "chocolate-chip-cookie"
    },
    {
      name: "Double Chocolate Brownie",
      image: "double-chocolate-brownie"
    }
  ],
  'Whole Bean': [
    {
      name: "Veranda Blend",
      image: "veranda-blend"
    },
    {
      name: "Cosmobucks Blonde Espresso Roast",
      image: "cosmobucks-blonde-espresso-roast"
    },
    {
      name: "Pike Place Roast",
      image: "pike-place-roast"
    },
    {
      name: "Decaf Pike Place Roast",
      image: "decaf-pike-place-roast"
    }, 
    {
      name: "Caffe Verona",
      image: "caffe-verona"
    },
    {
      name: "Espresso Roast",
      image: "espresso-roast"
    },
    {
      name: "Italian Roast",
      image: "italian-roast"
    }
  ],
  'VIA Instant': [
    {
      name: "VIA Sweetened Iced Coffee",
      image: "via-sweetened-iced-coffee"
    },
    {
      name: "VIA Veranda Blend",
      image: "via-veranda-blend"
    },
    {
      name: "Cosmobucks VIA Instant Pike Place Roast",
      image: "cosmobucks-via-instant-pike-place-roast"
    },
    {
      name: "VIA Italian Roast",
      image: "via-italian-roast"
    }
  ],
  'Shopping Bag': [
    {
      name: "Small Shopping Bag",
      image: "small-shopping-bag"
    }
  ]
}

export default products;
