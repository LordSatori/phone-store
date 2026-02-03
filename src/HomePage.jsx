//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// React Tools
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Css Files
import './assets/css/Main.css';
import './assets/css/Additional.css';

// Import File
import TopSale from './component/TopSale';
import { CartContext } from './context/CartContext.jsx';
import phones from './Object/phone.js';
import laptops from './Object/laptop.js';
import tablets from './Object/tablet.js';
import watches from './Object/watch.js';

function HomePage() {
    const { addToCart } = useContext(CartContext);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-dark text-white py-5" style={{ minHeight: '500px', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-3 fw-bold mb-4">Welcome to Voltify</h1>
                            <p className="fs-5 mb-4 text-light">Discover the latest and greatest in electronics. From smartphones to laptops, we have everything you need.</p>
                            <div className="d-flex gap-3">
                                <Link to="/mobile-phone" className="btn btn-primary btn-lg fw-bold">
                                    Shop Now
                                </Link>
                                <button className="btn btn-outline-light btn-lg fw-bold">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={phones[0].image} alt="Featured Product" style={{ maxHeight: '400px', filter: 'drop-shadow(0 10px 30px rgba(255,255,255,0.2))' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center fw-bold mb-5">Shop by Category</h2>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <Link to="/mobile-phone" className="text-decoration-none">
                                <div className="card border-0 shadow-sm h-100 transition" style={{ cursor: 'pointer', transform: 'translateY(0)', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div className="card-body text-center py-5">
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                                        <h5 className="card-title fw-bold">Mobile Phones</h5>
                                        <p className="card-text text-muted">Latest smartphones from top brands</p>
                                        <span className="text-primary fw-bold">Browse →</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Link to="/laptop" className="text-decoration-none">
                                <div className="card border-0 shadow-sm h-100 transition" style={{ cursor: 'pointer', transform: 'translateY(0)', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div className="card-body text-center py-5">
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💻</div>
                                        <h5 className="card-title fw-bold">Laptops</h5>
                                        <p className="card-text text-muted">Powerful laptops for work and play</p>
                                        <span className="text-primary fw-bold">Browse →</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Link to="/smart-watch" className="text-decoration-none">
                                <div className="card border-0 shadow-sm h-100 transition" style={{ cursor: 'pointer', transform: 'translateY(0)', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div className="card-body text-center py-5">
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⌚</div>
                                        <h5 className="card-title fw-bold">Smart Watches</h5>
                                        <p className="card-text text-muted">Stay connected with our smart watches</p>
                                        <span className="text-primary fw-bold">Browse →</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <Link to="/tablet" className="text-decoration-none">
                                <div className="card border-0 shadow-sm h-100 transition" style={{ cursor: 'pointer', transform: 'translateY(0)', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <div className="card-body text-center py-5">
                                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
                                        <h5 className="card-title fw-bold">Tablets</h5>
                                        <p className="card-text text-muted">Portable tablets for productivity</p>
                                        <span className="text-primary fw-bold">Browse →</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Sale Section */}
            <section className="py-5">
                <div className="container">
                    <h2 className="fw-bold mb-2">Trending Products</h2>
                    <p className="text-muted mb-5">Check out our best-selling products this week</p>
                    <div className="row g-4">
                        {[phones[0], laptops[0], tablets[0], watches[0]].map((product, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <Link to={`/mobile-phone/${product.id}`} className="text-decoration-none">
                                    <Card className="card-hover shadow-sm border-0 h-100" style={{ overflow: 'hidden' }}>
                                        <div style={{ height: '200px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                            <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="text-primary fw-bold">{product.name}</Card.Title>
                                            <p className="text-muted small">{product.brand}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="fw-bold text-dark mb-0">${product.price.toLocaleString()}</h5>
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        addToCart(product);
                                                        alert(`${product.name} added to cart!`);
                                                    }}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="fw-bold mb-5">Featured Deals</h2>
                    <div className="row g-4">
                        {[phones[0], laptops[0], tablets[0], watches[0]].map((product, index) => (
                            <div key={index} className="col-md-6 col-lg-3">
                                <Link to={`/mobile-phone/${product.id}`} className="text-decoration-none">
                                    <Card className="card-hover shadow-sm border-0 h-100" style={{ overflow: 'hidden' }}>
                                        <div style={{ height: '200px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                            <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title className="text-primary fw-bold">{product.name}</Card.Title>
                                            <p className="text-muted small">{product.brand}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="fw-bold text-dark mb-0">${product.price.toLocaleString()}</h5>
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        addToCart(product);
                                                        alert(`${product.name} added to cart!`);
                                                    }}
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Promo Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="bg-primary text-white p-5 rounded-4" style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="fw-bold mb-3">Summer Sale</h3>
                                <p className="fs-5 mb-4">Get up to 50% off on selected products. Limited time offer!</p>
                                <Link to="/mobile-phone" className="btn btn-light fw-bold" style={{ width: 'fit-content' }}>
                                    Shop Sale
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-secondary text-white p-5 rounded-4" style={{ minHeight: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 className="fw-bold mb-3">Free Shipping</h3>
                                <p className="fs-5 mb-4">Free shipping on all orders above $100. Fast and reliable delivery.</p>
                                <Link to="/laptop" className="btn btn-light fw-bold" style={{ width: 'fit-content' }}>
                                    Shop Laptops
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;