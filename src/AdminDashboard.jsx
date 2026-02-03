import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from './context/AdminContext.jsx';
import './assets/css/Main.css';
import './assets/css/Additional.css';

function AdminDashboard() {
  const { admin, adminLogout } = useAdmin();
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('adminProducts');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    brand: '',
    price: '',
    category: 'phone',
    image: '',
    specs: {}
  });

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('adminProducts', JSON.stringify(products));
  }, [products]);

  const handleLogout = () => {
    adminLogout();
    navigate('/admin-login');
  };

  const resetForm = () => {
    setFormData({
      id: '',
      name: '',
      brand: '',
      price: '',
      category: 'phone',
      image: '',
      specs: {}
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing product
      setProducts(products.map(p => p.id === editingId ? { ...formData, id: editingId } : p));
      alert('Product updated successfully!');
    } else {
      // Add new product
      const newProduct = {
        ...formData,
        id: Math.max(...products.map(p => p.id || 0), 0) + 1
      };
      setProducts([...products, newProduct]);
    }
    
    resetForm();
  };

  const handleEditProduct = (product) => {
    setFormData(product);
    setEditingId(product.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
      alert('Product deleted successfully!');
    }
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid bg-light" style={{ minHeight: '100vh' }}>
      {/* Admin Header */}
      <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-3 w-100">
            <h5 className="mb-0 text-white fw-bold">⚙️ Admin Dashboard</h5>
            <span className="ms-auto text-light">Welcome, {admin?.username}</span>
            <button 
              className="btn btn-outline-light btn-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="py-5">
        <div className="container">
          {/* Page Header */}
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h1 className="fw-bold mb-2">Product Management</h1>
              <p className="text-muted">Manage your product inventory</p>
            </div>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
            >
              + Add New Product
            </button>
          </div>

          {/* Add/Edit Form */}
          {showForm && (
            <div className="card shadow-sm mb-5 border-0">
              <div className="card-header bg-primary text-white p-4">
                <h5 className="mb-0">{editingId ? '✏️ Edit Product' : '➕ Add New Product'}</h5>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleAddProduct}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Product Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., iPhone 15 Pro"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold">Brand *</label>
                      <input
                        type="text"
                        name="brand"
                        className="form-control form-control-lg"
                        value={formData.brand}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g., Apple"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold">Price *</label>
                      <input
                        type="number"
                        name="price"
                        className="form-control form-control-lg"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                        placeholder="0.00"
                        step="0.01"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold">Category *</label>
                      <select
                        name="category"
                        className="form-control form-control-lg"
                        value={formData.category}
                        onChange={handleInputChange}
                      >
                        <option value="phone">Phone</option>
                        <option value="laptop">Laptop</option>
                        <option value="tablet">Tablet</option>
                        <option value="watch">Smart Watch</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-bold">Image URL</label>
                      <input
                        type="text"
                        name="image"
                        className="form-control form-control-lg"
                        value={formData.image}
                        onChange={handleInputChange}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div className="d-flex gap-3 mt-4">
                    <button type="submit" className="btn btn-primary btn-lg fw-bold">
                      {editingId ? 'Update Product' : 'Add Product'}
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-lg"
                      onClick={resetForm}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="🔍 Search products by name or brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Products Table */}
          <div className="card shadow-sm border-0">
            <div className="card-header bg-light p-4 border-bottom">
              <h5 className="mb-0">Products ({filteredProducts.length})</h5>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Brand</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((product) => (
                        <tr key={product.id}>
                          <td className="fw-bold">#{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.brand}</td>
                          <td>
                            <span className="badge bg-info text-dark">{product.category}</span>
                          </td>
                          <td className="fw-bold">${parseFloat(product.price).toLocaleString()}</td>
                          <td>
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-sm btn-warning"
                                onClick={() => handleEditProduct(product)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDeleteProduct(product.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-5">
                          <p className="text-muted">No products found</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
