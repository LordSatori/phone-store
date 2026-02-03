import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from './context/AdminContext.jsx';
import './assets/css/Main.css';
import './assets/css/Additional.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { adminLogin } = useAdmin();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (adminLogin(username, password)) {
        navigate('/admin-dashboard');
      } else {
        setError('Invalid username or password. (Demo: admin / admin123)');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '450px', borderRadius: '20px', border: 'none' }}>
        <div className="card-body p-5">
          {/* Header */}
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Admin Portal</h2>
            <p className="text-muted">Sign in to access the admin dashboard</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="alert alert-danger border-0 rounded-3 mb-4" role="alert">
              <div className="d-flex gap-3">
                <div style={{ fontSize: '1.5rem' }}>⚠️</div>
                <div>
                  <h6 className="alert-heading mb-1">Login Failed</h6>
                  <p className="mb-0">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Demo Credentials Info */}
          <div className="alert alert-info border-0 rounded-3 mb-4" style={{ backgroundColor: '#e3f2fd' }}>
            <p className="mb-0"><strong>Demo Credentials:</strong><br/>Username: admin<br/>Password: admin123</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="form-label fw-bold mb-2">Username</label>
              <input
                type="text"
                className="form-control form-control-lg border-0"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                disabled={loading}
                style={{ backgroundColor: '#f5f5f5' }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold mb-2">Password</label>
              <input
                type="password"
                className="form-control form-control-lg border-0"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                style={{ backgroundColor: '#f5f5f5' }}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-lg w-100 fw-bold py-3"
              disabled={loading}
              style={{ borderRadius: '10px' }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center mt-5 pt-4 border-top">
            <p className="text-muted small mb-0">Voltify Admin Dashboard © 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
