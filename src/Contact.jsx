//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

// React Tools
import React from 'react';

// Css Files
import './assets/css/Main.css';
import './assets/css/Additional.css';

function Tablet() {

    return (
        <>
            <div className='w-100'>
                <div className='my-5'>
                    <div className='d-flex flex-row w-100 justify-content-center'>
                        <Card className='p-4' style={{ width: '30rem' }}>
                            <Card.Body>
                                <Card.Title className='text-primary mb-4 fs-3'>Get in Touch</Card.Title>
                                <form>
                                    <div className='mb-3'>
                                        <label htmlFor='name' className='form-label'>Name</label>
                                        <input type='text' className='form-control' id='name' placeholder='Enter Name...' />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='email' className='form-label'>Email</label>
                                        <input type='email' className='form-control' id='email' placeholder='Enter Email...' />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='message' className='form-label'>Message</label>
                                        <textarea className='form-control' id='message' rows='4' placeholder='Feedback here...'></textarea>
                                    </div>
                                    <button type='submit' className='btn btn-primary w-100'>Submit</button>
                                </form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    )
}


export default Tablet;