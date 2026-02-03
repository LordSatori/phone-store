//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

// React Tools
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

// Css Files
import './assets/css/Main.css';
import './assets/css/Additional.css';

//Import File
import laptops from './Object/laptop.js';
import phones from './Object/phone.js';
import watches from './Object/watch.js';
import tablets from './Object/tablet.js';
import { CartContext } from './context/CartContext.jsx';

function ProductDetail() {
    const { category, id } = useParams();
    const { addToCart } = useContext(CartContext);



    const getProduct = () => {
        const key = category ? category.toLowerCase() : '';
        if (['mobile-phone', 'phone', 'phones', 'mobile'].includes(key)) return phones;
        if (['laptop', 'laptops'].includes(key)) return laptops;
        if (['smart-watch', 'watch', 'watches', 'smartwatch'].includes(key)) return watches;
        if (['tablet', 'tablets'].includes(key)) return tablets;
        return [];
    };

    const allProduct = getProduct() || [];
    const product = Array.isArray(allProduct) ? allProduct.find(p => p.id === parseInt(id, 10)) : undefined;

    if (!product) {
        return (
            <div className='container m-5'>
                <p className='fw-bold text-center'>Product not found</p>
            </div>
        );
    }

    return (
    <div className="container mt-4">
      <div className="card border-0 shadow-lg overflow-hidden" style={{ borderRadius: '20px' }}>
        <div className="row g-0">
          
          {/* Left Side: Hero Image Area */}
          <div className="col-lg-5 bg-dark d-flex align-items-center justify-content-center p-5">
            <div className="text-center">
              <img 
                src={product.image} 
                className="img-fluid transition-transform" 
                alt={product.name}
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))', transform: 'scale(1.1)' }}
              />
              <div className="mt-4">
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Info */}
          <div className="col-lg-7 p-4 p-md-5 bg-white">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="text-primary fw-bold text-uppercase mb-1">{product.brand}</h6>
                <h2 className="fw-black mb-3">{product.name}</h2>
              </div>
              <div className="text-end">
                <h3 className="fw-bold text-dark mb-0">${product.price.toLocaleString()}</h3>
                <small className="text-muted">Available in stock</small>
              </div>
            </div>

            <hr className="my-4" />

            {/* Specs Section with Badges */}
            <h5 className="fw-bold mb-3">Specifications</h5>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="border rounded-3 p-3 flex-fill bg-light">
                  <div className="text-muted small text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>
                    {key}
                  </div>
                  <div className="fw-bold text-dark">{value}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="row g-2">
              <div className="col-8">
                <button 
                  className="btn btn-dark btn-lg w-100 fw-bold py-3 shadow"
                  onClick={() => {
                    addToCart(product);
                    alert(`${product.name} added to cart!`);
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <div className="col-4">
                <button className="btn btn-info btn-lg w-100 py-3">
                  <i className="bi bi-heart"></i> Buy Now
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    );
}

export default ProductDetail;