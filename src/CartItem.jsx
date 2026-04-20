import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  selectCartItems,
  selectCartTotalCount,
  selectCartTotalCost,
} from './store/CartSlice';
import './App.css';

function Navbar({ onContinueShopping, onGoHome, cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🌿 Paradise Nursery</div>
      <div className="navbar-links">
        <button onClick={onGoHome}>Home</button>
        <button onClick={onContinueShopping}>Plants</button>
        <button className="cart-icon-btn">
          🛒 Cart
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  );
}

function CartItem({ onContinueShopping, onGoHome }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalCount = useSelector(selectCartTotalCount);
  const totalCost = useSelector(selectCartTotalCost);

  const handleCheckout = () => {
    alert('🌿 Coming Soon! Thank you for shopping at Paradise Nursery.');
  };

  return (
    <div className="cart-page">
      <Navbar
        onContinueShopping={onContinueShopping}
        onGoHome={onGoHome}
        cartCount={totalCount}
      />

      <div className="cart-container">
        <h2>🛒 Your Shopping Cart</h2>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty. Go find some plants you love! 🌱</p>
            <button className="btn-primary" onClick={onContinueShopping}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {items.map(item => (
              <div className="cart-item-row" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <div className="unit-price">Unit price: ${item.price.toFixed(2)}</div>
                </div>

                <div className="cart-item-controls">
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >−</button>
                  <span className="qty-display">{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >+</button>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="delete-btn"
                  onClick={() => dispatch(removeItem(item.id))}
                >
                  🗑 Remove
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <div className="cart-total">
                Total: <span>${totalCost.toFixed(2)}</span>
              </div>
              <div className="cart-actions">
                <button className="btn-continue" onClick={onContinueShopping}>
                  ← Continue Shopping
                </button>
                <button className="btn-checkout" onClick={handleCheckout}>
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItem;
