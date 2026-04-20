# paradise-nursery
# 🌿 Paradise Nursery Shopping Application

A dynamic e-commerce web application built with React and Redux for browsing and purchasing houseplants online.

## Project Overview

Paradise Nursery is an online plant shop that allows users to:
- Browse a curated collection of houseplants organized by category
- View plant details including images, names, descriptions, and prices
- Add plants to a shopping cart
- Manage cart items (increase/decrease quantity, remove items)
- View total costs dynamically updated in real time

## Tech Stack

- **React** — Component-based UI
- **Redux Toolkit** — State management for the shopping cart
- **Vite** — Build tool and dev server
- **CSS3** — Custom styling with responsive design

## Features

- 🛒 Dynamic shopping cart with Redux state management
- 🌱 18+ unique houseplants across 3 categories
- 🔢 Live cart item count in the navbar
- ➕➖ Quantity controls per cart item
- 🗑️ Remove individual items from cart
- 💰 Per-item and total cost calculations
- 🏠 Landing page with "Get Started" button
- 📱 Responsive layout

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── App.jsx            # Landing page
├── App.css            # Global styles + background
├── AboutUs.jsx        # Company info page
├── ProductList.jsx    # Plant browsing page
├── CartItem.jsx       # Shopping cart page
└── store/
    └── CartSlice.jsx  # Redux cart slice
```

## Author

Neba Mishael Amabo
