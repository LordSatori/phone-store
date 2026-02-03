import React, { useContext } from 'react';
import { CartContext } from './context/CartContext.jsx';
import { Link } from 'react-router-dom';
import './assets/css/Main.css';
import './assets/css/Additional.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 mb-5">
        <div className="text-center py-5">
          <h2 className="fw-bold mb-4">Your Cart is Empty</h2>
          <p className="text-muted mb-4">Add some products to get started!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <h1 className="fw-bold mb-4">Shopping Cart</h1>

      <div className="row">
        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="align-middle">
                      <td>
                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{ width: '60px', height: '60px', objectFit: 'contain' }}
                          />
                          <div>
                            <p className="mb-0 fw-bold">{item.name}</p>
                            <small className="text-muted">{item.brand}</small>
                          </div>
                        </div>
                      </td>
                      <td className="fw-bold">${item.price.toLocaleString()}</td>
                      <td>
                        <div className="input-group" style={{ width: '120px' }}>
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={item.quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="fw-bold">${(item.price * item.quantity).toLocaleString()}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Order Summary</h5>

              <div className="mb-3">
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal:</span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping:</span>
                  <span className="text-success">FREE</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Tax:</span>
                  <span>${(getTotalPrice() * 0.1).toLocaleString()}</span>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between mb-4">
                <h5 className="fw-bold">Total:</h5>
                <h5 className="fw-bold text-primary">${(getTotalPrice() * 1.1).toLocaleString()}</h5>
              </div>

              <button className="btn btn-primary w-100 btn-lg fw-bold mb-2">
                Checkout
              </button>

              <Link to="/" className="btn btn-outline-secondary w-100">
                Continue Shopping
              </Link>

              <button
                className="btn btn-outline-danger w-100 mt-3"
                onClick={() => {
                  if (window.confirm('Are you sure you want to clear your cart?')) {
                    clearCart();
                  }
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
