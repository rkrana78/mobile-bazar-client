import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'


const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5100/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
    }, [])
    return (
        <div className="row">
            {
                loading ? <div className="text-center spinner">
                <div className="spinner-grow spin" role="status" aria-hidden="true"></div>
              </div>
              : products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default Home;