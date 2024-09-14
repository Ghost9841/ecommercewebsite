import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel/Carousel';
import ProductList from './ProductList';


const Home = () => {
  const menProducts = [
    { _id: '1', name: 'Ryzen 4000 S series', price: 99.99, image: 'https://via.placeholder.com/200' },
    { _id: '2', name: 'Soap', price: 5.99, image: 'https://via.placeholder.com/200' },
    { _id: '3', name: 'Beauty Cream', price: 25.99, image: 'https://via.placeholder.com/200' },
  ];

  const womenProducts = [
    { _id: '1', name: 'Dress', price: 49.99, image: 'https://via.placeholder.com/200' },
    { _id: '2', name: 'Handbag', price: 69.99, image: 'https://via.placeholder.com/200' },
    { _id: '3', name: 'Beauty Cream', price: 25.99, image: 'https://via.placeholder.com/200' },
  ];

  const kidsProducts = [
    { _id: '1', name: 'Toy Car', price: 19.99, image: 'https://via.placeholder.com/200' },
    { _id: '2', name: 'Kids Soap', price: 3.99, image: 'https://via.placeholder.com/200' },
    { _id: '3', name: 'Kids Cream', price: 12.99, image: 'https://via.placeholder.com/200' },
  ];

  return (
    <div className="home">
      <Carousel />
      <div className="home-content">
        <div className="featured-section">
          <Link to="/mens" className="featured-link">
            <h2>Men's Featured Products</h2>
          </Link>
          <ProductList products={menProducts}/>
        </div>
        <div className="featured-section">
          <Link to="/womens" className="featured-link">
            <h2>Women's Featured Products</h2>
          </Link>
          <ProductList products={womenProducts} />
        </div>
        <div className="featured-section">
          <Link to="/kids" className="featured-link">
            <h2>Kids' Featured Products</h2>
          </Link>
          <ProductList products={kidsProducts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
