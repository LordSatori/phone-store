//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// React Tools
import React from 'react';

// Images
import LogoFooter from '../../public/Logo-footer.png';

// Css Files
import '../assets/css/Main.css';
import '../assets/css/Additional.css';



function Footer() {
    return (
        <>
            <footer className="w-100 mt-5">
                <div className="bg-primary p-5 text-white">
                    <div className="d-flex justify-content-around">
                        <div className="d-flex flex-column justify-content-center">
                            <a className="d-flex align-items-center text-decoration-none" href="/">
                                <img src={LogoFooter} alt="Logo" width="50" />
                                <span className="text-info fs-1 ms-3 fw-bolder">Voltify.</span>
                            </a>
                            <p className="fs-6 ft-w mt-5">We are committed to providing our community with authentic products, competitive pricing, and expert technical support. Whether you are looking for the newest flagship smartphone or professional-grade gear, we ensure a seamless shopping experience backed by quality guarantee and reliable after-sales service.
                            </p>
                            <p className="fs-6 ft-w mt-5">Follow us on :</p>
                            <div className="d-flex flex-row gap-3">
                                <a className="text-decoration-none" href="https://web.facebook.com/">
                                    <img width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/500px-Facebook_Logo_%282019%29.png" alt="1" />
                                </a>
                                <a className="text-decoration-none" href="https://www.instagram.com/">
                                    <img width="20" height="20" src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="2" />
                                </a>
                                <a className="text-decoration-none" href="https://web.telegram.org">
                                    <img width="20" height="20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/500px-Telegram_logo.svg.png" alt="3" />
                                </a>
                                <a className="text-decoration-none" href="https://www.tiktok.com/">
                                    <img width="20" height="20" src="https://static.vecteezy.com/system/resources/thumbnails/016/716/450/small/tiktok-icon-free-png.png" alt="4" />
                                </a>
                                <a className="text-decoration-none" href="https://x.com/">
                                    <img width="20" height="20" src="https://images.freeimages.com/image/large-previews/f35/x-twitter-logo-on-black-circle-5694247.png?h=350" alt="5" />
                                </a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column gap-3">
                                <h3 className="text-secondary">Site</h3>
                                <a className="text-decoration-none" href="/">
                                    <span className="text-white fs-6 footer-link">Home</span>
                                </a>
                                <a className="text-decoration-none" href="/mobile-phone">
                                    <span className="text-white fs-6 footer-link">Mobile Phones</span>
                                </a>
                                <a className="text-decoration-none" href="/laptop">
                                    <span className="text-white fs-6 footer-link">Laptops</span>
                                </a>
                                <a className="text-decoration-none" href="/smart-watch">
                                    <span className="text-white fs-6 footer-link">Smart Watches</span>
                                </a>
                                <a className="text-decoration-none" href="/tablet">
                                    <span className="text-white fs-6 footer-link">Tablets</span>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column gap-3">
                                <h3 className="text-secondary">Support</h3>
                                <a className="text-decoration-none" href="/contact-us">
                                    <span className="text-white fs-6 footer-link">Contact</span>
                                </a>
                                <a className="text-decoration-none  footer-link" href="https://policies.google.com/faq?hl=en-US">
                                    <span className="text-white fs-6 footer-link">FaQs</span>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="d-flex flex-column gap-3">
                                <h3 className="text-secondary">Legal</h3>
                                <a className="text-decoration-none" href="https://policies.google.com/terms?hl=en-US">
                                    <span className="text-white fs-6 footer-link">Term of Service</span>
                                </a>
                                <a className="text-decoration-none" href="https://policies.google.com/privacy?hl=en">
                                    <span className="text-white fs-6 footer-link">Privacy Policy</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{background: "#192640"}} className="d-flex justify-content-center text-white align-items-center">
                    <p className="fs-6">Copyright &copy;{new Date().getFullYear()}, <span className='text-info fw-bold'>Satori</span></p>
                </div>
            </footer>
        </>

    );
};

export default Footer;
