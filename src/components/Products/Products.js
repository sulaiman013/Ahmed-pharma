import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';
const Courses = () => {

    const [products] = useProducts();

    return (
       
        <div className = "card-gallery">
           {    
                products.map(
                    product => <Product
                    product = {product}
                    key = {product.key}
                    ></Product>
                )
            }
        </div>
    );
};

export default Courses;