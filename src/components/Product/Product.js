import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';

const Product = ({ product }) => {
    return (
        <div className="col-md-3 products-container">
            <div className="container">
                <img src={product.imageURL} alt="" />
                <h5>{product.name}</h5>
                <h6>{product.price}</h6>
                <Link to={`/checkout/${product._id}`}><button className="btn btn-success mb-4"><FontAwesomeIcon icon={faShoppingCart} /> Buy now</button></Link>
            </div>
        </div>
    );
};

export default Product;