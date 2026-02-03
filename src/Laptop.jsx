//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

// React Tools
import React, { useContext } from 'react';
import { Link } from 'react-router';

// Css Files
import './assets/css/Main.css';
import './assets/css/Additional.css';

// Import Products
import laptops from './Object/laptop.js';
import Sidebar from './component/sidebar.jsx';
import { Searching } from './context/SearchContext.jsx';

function Laptop() {
    const { search, searchBrand } = useContext(Searching);

    return (
        <>
            <div className='w-100'>
                <div className='mt-1'>
                    <h2 className='text-info my-4 ms-3'>Laptop</h2>
                    <div className='d-flex flex-row w-100'>
                        <Sidebar />
                        <div className='d-flex flex-md-row gap-4 flex-wrap container ms-3'>
                            {(() => {
                                const findItem = search ? search.toLowerCase() : '';
                                const filtered = laptops.filter(i => {
                                    const searched = i.name.toLowerCase().includes(findItem);
                                    const matchedBrand = searchBrand.length === 0 || searchBrand.includes(i.brand)
                                    return matchedBrand && searched;
                                }
                                );
                                return filtered.map((laptop) => (
                                    <Link to={`/laptop/${laptop.id}`} className='text-decoration-none'>
                                        <Card key={laptop.name} className='card-hover' style={{ width: '17rem', height: '30rem' }}>
                                            <Card.Img className='bg-white' variant="top" src={laptop.image} />
                                            <Card.Body>
                                                <Card.Title className='text-primary fs-3'>{laptop.name}</Card.Title>
                                                <Card.Text className='text-secondary mt-3'>
                                                    Brand: <span className='fw-bold'>{laptop.brand}</span>
                                                </Card.Text>
                                                <Card.Text className='fs-4 fw-bold text-secondary'>
                                                    ${laptop.price}
                                                </Card.Text>
                                                <div className='d-flex flex-row justify-content-between gap-2'>
                                                    <button className='btn btn-primary w-100'>Add to Cart</button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Link>

                                ))
                            })()}
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}


export default Laptop;