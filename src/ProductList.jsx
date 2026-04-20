import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartTotalCount } from './store/CartSlice';
import './App.css';

// =====================
// PLANT DATA — 3 Categories, 6 plants each
// =====================
const categories = [
  {
    name: '🌵 Succulents & Cacti',
    plants: [
      { id: 's1', name: 'Echeveria', price: 8.99,  description: 'Rosette-shaped beauty with pastel hues.', image: 'https://images.unsplash.com/photo-1520302630591-fd1002865ed6?w=400&q=80' },
      { id: 's2', name: 'Golden Barrel Cactus', price: 12.99, description: 'Iconic round cactus, very low maintenance.', image: 'https://images.unsplash.com/photo-1521185496955-15097b20c5fe?w=400&q=80' },
      { id: 's3', name: 'Aloe Vera', price: 10.99, description: 'Healing succulent perfect for sunny spots.', image: 'https://images.unsplash.com/photo-1567748157439-651aca2ff064?w=400&q=80' },
      { id: 's4', name: 'Haworthia', price: 7.99,  description: 'Compact striped succulent, great for desks.', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80' },
      { id: 's5', name: 'Jade Plant', price: 11.99, description: 'Symbol of good luck and prosperity.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80' },
      { id: 's6', name: 'String of Pearls', price: 14.99, description: 'Trailing succulent with bead-like leaves.', image: 'https://images.unsplash.com/photo-1614594895807-d9c7eb87e9cf?w=400&q=80' },
    ],
  },
  {
    name: '🌿 Tropical Foliage',
    plants: [
      { id: 't1', name: 'Monstera Deliciosa', price: 24.99, description: 'Iconic split leaves, a true statement plant.', image: 'https://images.unsplash.com/photo-1614594895807-d9c7eb87e9cf?w=400&q=80' },
      { id: 't2', name: 'Pothos', price: 9.99,  description: 'Trailing vine, nearly impossible to kill.', image: 'https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=400&q=80' },
      { id: 't3', name: 'Peace Lily', price: 15.99, description: 'Air-purifying with elegant white blooms.', image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e3e83?w=400&q=80' },
      { id: 't4', name: 'Bird of Paradise', price: 34.99, description: 'Dramatic large leaves, tropical statement.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
      { id: 't5', name: 'Philodendron', price: 18.99, description: 'Heart-shaped leaves, easy-care tropical.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80' },
      { id: 't6', name: 'Rubber Plant', price: 22.99, description: 'Bold dark leaves, sculptural and striking.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80' },
    ],
  },
  {
    name: '🌸 Flowering Plants',
    plants: [
      { id: 'f1', name: 'Orchid', price: 19.99, description: 'Elegant blooms lasting weeks at a time.', image: 'https://images.unsplash.com/photo-1566907225472-514215ea2de8?w=400&q=80' },
      { id: 'f2', name: 'African Violet', price: 8.99,  description: 'Compact bloomer in rich purple hues.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80' },
      { id: 'f3', name: 'Anthurium', price: 17.99, description: 'Waxy heart-shaped blooms in vivid red.', image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=400&q=80' },
      { id: 'f4', name: 'Bromeliad', price: 13.99, description: 'Tropical color in a dramatic rosette form.', image: 'https://images.unsplash.com/photo-1530968831187-a937bddd8b89?w=400&q=80' },
      { id: 'f5', name: 'Kalanchoe', price: 7.99, description: 'Long-lasting clusters of cheerful flowers.', image: 'https://images.unsplash.com/photo-1490750967868-88df5691cc1e?w=400&q=80' },
      { id: 'f6', name: 'Begonia', price: 9.99,  description: 'Lush blooms in pink, red, white, or orange.', image: 'https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=400&q=80' },
    ],
  },
];

function Navbar({ onGoToCart, onGoHome, cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🌿 Paradise Nursery</div>
      <div className="navbar-links">
        <button onClick={onGoHome}>Home</button>
        <a href="#plants">Plants</a>
        <button className="cart-icon-btn" onClick={onGoToCart}>
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

function ProductList({ onGoToCart, onGoHome }) {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartTotalCount);
  const cartItems = useSelector(state => state.cart.items);
  const [added, setAdded] = useState({});

  const isInCart = (id) => cartItems.some(item => item.id === id) || added[id];

  const handleAdd = (plant) => {
    dispatch(addItem(plant));
    setAdded(prev => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div className="product-page">
      <Navbar onGoToCart={onGoToCart} onGoHome={onGoHome} cartCount={cartCount} />

      <div id="plants" className="page-hero">
        <h1>Our Plant Collection</h1>
        <p>Handpicked houseplants to brighten every corner of your home</p>
      </div>

      {categories.map(category => (
        <div className="category-section" key={category.name}>
          <h2 className="category-title">{category.name}</h2>
          <div className="plants-grid">
            {category.plants.map(plant => (
              <div className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <div className="plant-info">
                  <div className="plant-name">{plant.name}</div>
                  <div className="plant-desc">{plant.description}</div>
                  <div className="plant-price">${plant.price.toFixed(2)}</div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAdd(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id) ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
