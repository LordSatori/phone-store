//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// React Tools
import React from 'react';

// Css Files
import '../assets/css/Main.css';
import '../assets/css/Additional.css';

// Import File
import tablets from '../Object/tablet.js';
import laptops from '../Object/laptop.js';
import phones from '../Object/phone.js';
import watches from '../Object/watch.js';

function TopSale() {

    return (
        <>
            <div className='d-flex flex-row w-100'>
                <div className='d-flex flex-md-row justify-content-between gap-4 flex-wrap container'>
                    <Card className='card-hover' style={{ width: '17rem', height : '30rem' }}>
                        <Card.Img className='bg-white' variant="top" src={tablets[1].image} />
                        <Card.Body>
                            <Card.Title className='text-primary fs-3'>{tablets[1].name}</Card.Title>
                            <Card.Text className='text-secondary mt-3'>
                                Brand: <span className='fw-bold'>{tablets[1].brand}</span>
                            </Card.Text>
                            <Card.Text className='fs-4 fw-bold text-secondary'>
                                ${tablets[1].price}
                            </Card.Text>
                            <div className='d-flex flex-row justify-content-between gap-2'>
                                <button className='btn btn-primary w-100'>Add to Cart</button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='card-hover' style={{ width: '17rem' }}>
                        <Card.Img className='bg-white' variant="top" src={laptops[14].image} />
                        <Card.Body>
                            <Card.Title className='text-primary fs-3'>{laptops[14].name}</Card.Title>
                            <Card.Text className='text-secondary mt-3'>
                                Brand: <span className='fw-bold'>{laptops[14].brand}</span>
                            </Card.Text>
                            <Card.Text className='fs-4 fw-bold text-secondary'>
                                ${laptops[14].price}
                            </Card.Text>
                            <div className='d-flex flex-row justify-content-between gap-2'>
                                <button className='btn btn-primary w-100'>Add to Cart</button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='card-hover' style={{ width: '17rem' }}>
                        <Card.Img className='bg-white' variant="top" src={watches[4].image} />
                        <Card.Body>
                            <Card.Title className='text-primary fs-3'>{watches[4].name}</Card.Title>
                            <Card.Text className='text-secondary mt-3'>
                                Brand: <span className='fw-bold'>{watches[4].brand}</span>
                            </Card.Text>
                            <Card.Text className='fs-4 fw-bold text-secondary'>
                                ${watches[4].price}
                            </Card.Text>
                            <div className='d-flex flex-row justify-content-between gap-2'>
                                <button className='btn btn-primary w-100'>Add to Cart</button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className='card-hover' style={{ width: '17rem' }}>
                        <Card.Img className='bg-white' variant="top" src={phones[0].image} />
                        <Card.Body>
                            <Card.Title className='text-primary fs-3'>{phones[0].name}</Card.Title>
                            <Card.Text className='text-secondary mt-3'>
                                Brand: <span className='fw-bold'>{phones[0].brand}</span>
                            </Card.Text>
                            <Card.Text className='fs-4 fw-bold text-secondary'>
                                ${phones[0].price}
                            </Card.Text>
                            <div className='d-flex flex-row justify-content-between gap-2'>
                                <button className='btn btn-primary w-100'>Add to Cart</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );

};

export default TopSale;