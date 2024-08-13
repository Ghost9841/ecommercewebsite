import React from 'react';

import { Link } from 'react-router-dom';

const Women = () => {
  const products = [
    {
      _id: '1',
      name: 'Dress',
      price: 49.99,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: '2',
      name: 'Handbag',
      price: 69.99,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: '3',
      name: 'Beauty Cream',
      price: 25.99,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: '4',
      name: 'Jewelry Set',
      price: 99.99,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: '5',
      name: 'Parlour Product',
      price: 35.99,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: '6',
      name: 'Shoes',
      price: 75.99,
      image: 'https://via.placeholder.com/200'
    }
  ];

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-3">
          <h4>Filters</h4>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <select className="form-select" id="age">
              <option value="">Select Age</option>
              <option value="1">0-10</option>
              <option value="2">10-18</option>
              <option value="2">18-25</option>
              <option value="3">26-35</option>
              <option value="4">36-45</option>
              <option value="5">46+</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="size" className="form-label">Size</label>
            <select className="form-select" id="size">
              <option value="">Select Size</option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">Height</label>
            <select className="form-select" id="height">
              <option value="">Select Height</option>
              <option value="short">Short</option>
              <option value="average">Average</option>
              <option value="tall">Tall</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="color" className="form-label">Color</label>
            <select className="form-select" id="color">
              <option value="">Select Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="black">Black</option>
              <option value="white">White</option>
            </select>
          </div>
        </div>
        <div className="col-md-9">
          <div className="d-flex justify-content-between mb-3">
            <h4>Women's Products</h4>
            <div className="input-group" style={{ width: '300px' }}>
              <input type="text" className="form-control" placeholder="Search products..." />
              <button type="button" class="btn btn-outline-dark">Search</button>
            </div>
          </div>
          <div className="row">
            {products.map(product => (
              <div key={product._id} className="col-md-4 mb-4">
                <div className="card">
                  <Link to={`/product/${product._id}`}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">${product.price}</p>
                      <Link to={`/product/${product._id}`} className="btn btn-outline-dark">View Product</Link>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;

