import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!user) {
    return (
      <div className="profile-container">
        <div className="profile-box">
          <p>You are not logged in. Please <a href="/login">login</a> first.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-box">
        <h2>User Profile</h2>
        
        <div className="profile-card">
          <div className="profile-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          
          <div className="profile-info">
            <div className="profile-info-item">
              <label>Name:</label>
              <p>{user.name}</p>
            </div>
            
            <div className="profile-info-item">
              <label>Email:</label>
              <p>{user.email}</p>
            </div>
            
            <div className="profile-info-item">
              <label>Member Since:</label>
              <p>{new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <button className="profile-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
