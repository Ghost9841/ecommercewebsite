import React from 'react';

const Cart = () => {
  const cartItems = [
    {
      _id: '1',
      name: 'Shampoo',
      price: 15.99,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: '2',
      name: 'Soap',
      price: 5.99,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: '3',
      name: 'Tech Gadget',
      price: 49.99,
      image: 'https://via.placeholder.com/200'
    }
  ];

  return (
    <div className="container">
      <div className="row mt-4">
        {cartItems.map(item => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">${item.price}</p>
                <a href="#" className="btn btn-outline-dark">Remove</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
