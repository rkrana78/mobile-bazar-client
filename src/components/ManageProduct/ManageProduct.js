import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'



const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([]);
    //const {id} = useParams();

    useEffect(() => {
        fetch('https://blooming-temple-24873.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setManageProducts(data))
    }, [manageProducts])

    const handleDelete = (id) => {
        fetch(`https://blooming-temple-24873.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                /*const newData = manageProducts.filter((product) => {
                    return product._id !== data._id;
                }); */
               // event.target.parentNode.style.display = 'none';
                setManageProducts(data);
            })
    }
    
    return (
        <div className="w-75 m-auto">
            <h2>Manage Products</h2>
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                          manageProducts.map(pd =>
                            <tr>
                                <td><h6>{pd.name}</h6></td>
                                <td>1</td>
                                <td><h6>{pd.price}</h6></td>
                                <td><button className="btn btn-danger" onClick={() => handleDelete(pd._id)} ><FontAwesomeIcon icon={faTrashAlt} /> Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;