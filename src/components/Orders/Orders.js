import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://blooming-temple-24873.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email])

    
    return (
        <div className="w-75 m-auto">

            <h4 className="text-danger">Hi, {loggedInUser.name}</h4>
            <h6>Your Total Order is: {orders.length} </h6>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Order Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         orders.map(order =>
                            <tr>
                                <td><h6>{order.name}</h6></td>
                                <td>1</td>
                                <td><h6>{order.price}</h6></td>
                                <td><h6>{order.orderTime}</h6></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;

