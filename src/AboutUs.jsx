import React from 'react';
import './AboutUs.css';

function AboutUs({ onBackToHome }) {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>🌿 About Paradise Nursery</h1>
        <p className="about-tagline">Where every plant finds its perfect home</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Paradise Nursery was founded with a simple but powerful belief: every home deserves
            the life, color, and calm that plants bring. What started as a small backyard passion
            project has grown into a beloved online destination for plant lovers across the country.
          </p>
          <p>
            We carefully select each plant in our collection for its beauty, resilience, and ability
            to thrive in home environments. Whether you're a seasoned plant parent or just starting
            your green journey, we have something special waiting for you.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To make the world a greener, healthier, and more beautiful place — one plant at a time.
            We believe in sustainable sourcing, ethical growing practices, and sharing the joy of
            nurturing living things.
          </p>
        </section>

        <section className="about-values">
          <div className="value-card">
            <span>🌱</span>
            <h3>Sustainably Sourced</h3>
            <p>All our plants are ethically grown and responsibly harvested.</p>
          </div>
          <div className="value-card">
            <span>💚</span>
            <h3>Expert Care</h3>
            <p>Each plant comes with tailored care instructions to help it flourish.</p>
          </div>
          <div className="value-card">
            <span>🚚</span>
            <h3>Safe Delivery</h3>
            <p>Carefully packaged and delivered fresh to your doorstep.</p>
          </div>
        </section>

        <section className="about-section about-founder">
          <h2>Meet the Team</h2>
          <p>
            Our passionate team of horticulturists, designers, and plant enthusiasts work together
            to curate the finest selection of houseplants. Led by founder <strong>Neba Mishael Amabo</strong>,
            we're dedicated to helping you create your own personal paradise at home.
          </p>
        </section>

        <button className="back-btn" onClick={onBackToHome}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
