//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Css Files
import './assets/css/Main.css';
import './assets/css/Additional.css';

// Component Imports
import { SearchProvider } from './context/SearchContext.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { AdminProvider } from './context/AdminContext.jsx';
import { ProtectedRoute } from './ProtectedRoute.jsx';
import { AdminProtectedRoute } from './AdminProtectedRoute.jsx';
import Header from './component/header.jsx';
import Footer from './component/footer.jsx';
import HomePage from './HomePage.jsx';
import Tablet from './Tablet.jsx';
import Phone from './Phone.jsx';
import Laptop from './Laptop.jsx';
import Watch from './Watch.jsx';
import Contact from './Contact.jsx';
import ProductDetail from './ProductDetail.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Profile from './Profile.jsx';
import Cart from './Cart.jsx';
import AdminLogin from './AdminLogin.jsx';
import AdminDashboard from './AdminDashboard.jsx';

function Layout() {
  const location = useLocation();
  const noHeaderFooterRoutes = ['/login', '/signup', '/admin-login', '/admin-dashboard'];
  const ShowHeaderFooter = !noHeaderFooterRoutes.includes(location.pathname);

  return (
    <>
      {ShowHeaderFooter && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/mobile-phone' element={<Phone />} />
        <Route path='/laptop' element={<Laptop />} />
        <Route path='/smart-watch' element={<Watch />} />
        <Route path='/tablet' element={<Tablet />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:category/:id' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route
          path='/admin-dashboard'
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          }
        />
      </Routes>
      {ShowHeaderFooter && <Footer />}
    </>
  );
}

function Main() {
  return (
    <AdminProvider>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <BrowserRouter>
              <Layout />
            </BrowserRouter>
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </AdminProvider>
  )
}

export default Main;
