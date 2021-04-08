import React, { useContext, useEffect, useState } from 'react';
import { set } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckOut.css'



const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    const { id } = useParams();

    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5100/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id])

    const handleOrder = () => {
        const newOrder ={...loggedInUser, ...product, orderTime: new Date()};
        fetch('http://localhost:5100/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(res => res.json())
        .then( data => setOrders(data));
    }

   // console.log(product)
    return (
        <div className="w-75 m-auto ">
            <h3>Checkout</h3>
            <table className="table checkout mt-4">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td><h5>{product.name}</h5></td>
                        <td>1</td>
                        <td><h5>{product.price}</h5></td>
                    </tr>
                </tbody>
            </table>
            <Link to='/orders'><button className="btn btn-success checkout-btn" onClick={handleOrder}>Proceed Checkout</button></Link>
        </div>
    );
};

export default CheckOut;

