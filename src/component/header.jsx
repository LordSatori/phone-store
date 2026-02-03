//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router
import { NavLink, Link, useNavigate } from 'react-router-dom';
import React, {useContext, useEffect, useState} from 'react';

// Images
import Logo from '../../public/Logo.png';
import Pfp from '../../public/Pfp.jpg';

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

//Files Import
import { Searching } from '../context/SearchContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { CartContext } from '../context/CartContext.jsx'

function Header() {
    const { search, setSearch } = useContext(Searching);
    const { user, logout } = useAuth();
    const { getTotalItems } = useContext(CartContext);
    const navigate = useNavigate();
    const [ stick, setStick ] = useState(false)
    const [ dropdownOpen, setDropdownOpen ] = useState(false)
    const [ authDropdownOpen, setAuthDropdownOpen ] = useState(false)

    const scroller = () => {
        if(window.pageYOffset > 150){
            setStick(true)
        } else {
            setStick(false)
        }
    }

    const handleLogout = () => {
        logout();
        setDropdownOpen(false);
        navigate('/');
    }

    useEffect(() => {
        window.addEventListener('scroll', scroller)

        return () => {
            window.removeEventListener('scroll', scroller)
        };
    }, []);

    return (
        <header className={stick ? 'w-100 sticky' : 'w-100'}>
            {/* Top tier header */}
            <div className='p-4 bg-light justify-content-between align-items-center d-flex'>
                {/* Left side */}
                <Link to="/" className='text-decoration-none d-flex align-items-center gap-2'>
                    <img width={35} src={Logo} alt="Logo" />
                    <span className='fs-3 fw-bold text-primary'>Vol<span className='text-secondary'>tify</span>.</span>
                </Link>
                {/* Middle side */}
                <div className='d-flex gap-2 align-items-center'>
                    <input value={ search } onChange={(e) => setSearch(e.target.value)} className='form-control'  size="70" type="text" name="search" id="searchBar" placeholder='Search...' />
                </div>
                {/* Right side */}
                <div className='d-flex gap-3 align-items-center'>
                    <Link to="/cart" className='text-decoration-none position-relative'>
                        <FontAwesomeIcon className='fs-4 text-primary' icon={faCartArrowDown} />
                        {getTotalItems() > 0 && (
                            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                                {getTotalItems()}
                            </span>
                        )}
                    </Link>
                    {user ? (
                        <div className='d-flex gap-2 align-items-center'>
                            <span className='text-dark fw-500'>{user.name}</span>
                            <div className='position-relative'>
                                <button 
                                    className='btn btn-light p-0' 
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    style={{ border: 'none' }}
                                >
                                    <img className='rounded-5' src={Pfp} alt="User" width={35} />
                                </button>
                                {dropdownOpen && (
                                    <div className='position-absolute bg-white rounded-2 shadow-lg' style={{ top: '45px', right: 0, minWidth: '150px', zIndex: 1000 }}>
                                        <Link 
                                            className='d-block text-decoration-none text-dark p-2 px-3 border-bottom' 
                                            to='/profile'
                                            onClick={() => setDropdownOpen(false)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            My Profile
                                        </Link>
                                        <button 
                                            className='w-100 bg-danger text-white border-0 p-2 px-3' 
                                            onClick={handleLogout}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className='position-relative'>
                            <button 
                                className='btn btn-primary btn-sm' 
                                onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
                            >
                                Account
                            </button>
                            {authDropdownOpen && (
                                <div className='position-absolute bg-white rounded-2 shadow-lg' style={{ top: '40px', right: 0, minWidth: '150px', zIndex: 1000 }}>
                                    <Link 
                                        className='d-block text-decoration-none text-dark p-2 px-3 border-bottom' 
                                        to='/login'
                                        onClick={() => setAuthDropdownOpen(false)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        className='d-block text-decoration-none text-dark p-2 px-3' 
                                        to='/signup'
                                        onClick={() => setAuthDropdownOpen(false)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Navigation Bar */}
            <nav className='navbar navbar-expand-lg navbar-light bg-primary'>
                <div className='container-fluid'>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav justify-content-center align-items-center w-100 gap-3'>
                            <li className='nav-item'>
                                <NavLink className='nav-link  text-white' to='/mobile-phone'>Mobile Phones</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link  text-white' to='/laptop'>Laptops</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link  text-white' to='/smart-watch'>Smart Watches</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link  text-white' to='/tablet'>Tablets</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link  text-white' to='/contact-us'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    );
}

export default Header; 