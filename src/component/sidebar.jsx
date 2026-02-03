//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// React Tools
import React, {useContext} from 'react';


// Css Files
import '../assets/css/Main.css';
import '../assets/css/Additional.css';

// Import File
import brands from '../Object/brand.js';
import { Searching } from '../context/SearchContext.jsx'

function Sidebar() {
    
    const { searchBrand, setSearchBrand} = useContext(Searching);

    const changeBrand = (brandName, isChecked) => {
        if(isChecked){
            setSearchBrand([...searchBrand, brandName]);
        } 
        else{
            setSearchBrand(searchBrand.filter(b => b !== brandName));
        }
    };

    return (
        <>
            <div className='bg-primary w-25 p-3 h-25'>
                <h4 className='text-white text-decoration-underline'>Categories</h4>
                <div className="mt-4 align-content-center">
                    <Form className='container d-flex flex-column gap-1'>
                        {brands.map((brand) => (
                            <div key={brand.name} className="mb-3">
                                <Form.Check 
                                    className='d-flex flex-row gap-2 align-items-center'
                                    type="checkbox"
                                    id={brand.name}
                                    checked = {searchBrand.includes(brand.name)}
                                    onChange={(e) => changeBrand(brand.name, e.target.checked)}
                                    label={
                                    <div className='container'>
                                        <Card className='d-flex flex-row align-items-center p-2 bg-white'>
                                            <img src={brand.image} alt={brand.name} width="20" height="auto" className='me-2 ms-2'/>
                                            <span className='fs-6 fw-bold text-primary'>{brand.name}</span>
                                        </Card>

                                    </div>
                                    }
                                />
                            </div>
                        ))}
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Sidebar;