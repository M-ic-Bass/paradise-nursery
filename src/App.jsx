import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';

function LandingPage({ onGetStarted, onAboutUs }) {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p className="tagline">Bring nature home — one plant at a time</p>
        <div className="landing-buttons">
          <button className="btn-primary" onClick={onGetStarted}>
            Get Started
          </button>
          <button className="btn-secondary" onClick={onAboutUs}>
            About Us
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState('landing'); // 'landing' | 'products' | 'cart' | 'about'

  return (
    <Provider store={store}>
      {page === 'landing' && (
        <LandingPage
          onGetStarted={() => setPage('products')}
          onAboutUs={() => setPage('about')}
        />
      )}
      {page === 'products' && (
        <ProductList
          onGoToCart={() => setPage('cart')}
          onGoHome={() => setPage('landing')}
        />
      )}
      {page === 'cart' && (
        <CartItem
          onContinueShopping={() => setPage('products')}
          onGoHome={() => setPage('landing')}
        />
      )}
      {page === 'about' && (
        <AboutUs onBackToHome={() => setPage('landing')} />
      )}
    </Provider>
  );
}

export default App;
