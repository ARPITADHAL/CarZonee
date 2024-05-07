import React, { useState } from 'react';
import './App.css';

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  homepage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    fontSize: '2.5rem',
  },
  buySellOptions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: '50px',
  },
  option: {
    flex: '1',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    margin: '0 10px',
  },
  button: {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  mostBought: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
    position: 'relative',
  },
  carouselContainer: {
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '900px',
    position: 'relative',
  },
  carousel: {
    display: 'flex',
    transition: 'transform 0.5s ease',
  },
  car: {
    flex: '0 0 auto',
    width: '300px',
    margin: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    borderRadius: '10px',
  },
  arrow: {
    cursor: 'pointer',
    fontSize: '2em',
    userSelect: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
    color: '#007BFF',
  },
  leftArrow: {
    left: '0',
  },
  rightArrow: {
    right: '0',
  },
};

const mostBoughtCars = [
  { name: 'Car 1' },
  { name: 'Car 2' },
  { name: 'Car 3' },
  { name: 'Car 4' },
  { name: 'Car 5' },
  { name: 'Car 6' },
  // ...more cars...
];

function HomePage() {
  const [start, setStart] = useState(0);

  const handleLeftClick = () => {
    setStart(Math.max(0, start - 1));
  };

  const handleRightClick = () => {
    setStart(Math.min(mostBoughtCars.length - 3, start + 1));
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div>Used Cars Marketplace</div>
        <div>
          <a href="/signup" style={{ color: '#fff', marginRight: '10px', textDecoration: 'none' }}>Sign Up</a>
          <a href="/login" style={{ color: '#fff', textDecoration: 'none' }}>Log In</a>
        </div>
      </nav>

      <div style={styles.homepage}>
        <h1 style={styles.title}>Welcome to Used Cars Marketplace</h1>
        <p>Buy and sell used cars at your convenience.</p>

        <div style={styles.buySellOptions}>
          <div style={styles.option}>
            <h2>Buy a Car</h2>
            <p>Find your perfect car from our wide range of used cars.</p>
            <button style={styles.button}>Shop Now</button>
          </div>

          <div style={styles.option}>
            <h2>Sell Your Car</h2>
            <p>Get the best price for your used car.</p>
            <button style={styles.button}>Sell Now</button>
          </div>
        </div>
      </div>
      <div className="most-bought" style={styles.mostBought}>
        <h2>Most Bought Cars</h2>
        <div className="carouselContainer" style={styles.carouselContainer}>
          <div className="arrow left-arrow" style={{ ...styles.arrow, ...styles.leftArrow }} onClick={handleLeftClick}>&lt;</div>
          <div className="carousel" style={{ ...styles.carousel, transform: `translateX(-${start * (300 + 20)}px)` }}>
            {mostBoughtCars.slice(start, start + 3).map((car, index) => (
              <div className="car" key={index} style={styles.car}>
                <h3>{car.name}</h3>
              </div>
            ))}
          </div>
          <div className="arrow right-arrow" style={{ ...styles.arrow, ...styles.rightArrow }} onClick={handleRightClick}>&gt;</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;