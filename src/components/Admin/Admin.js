import React from 'react';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faThLarge } from '@fortawesome/free-solid-svg-icons'
import './Admin.css'

const Admin = () => {
    return (
        <div className="row">
            <div className="col-md-3 ">
                <Link to='/manageProduct'><button className="btn btn-info mb-3 ml-5 px-4 mt-5"><FontAwesomeIcon icon={faThLarge} /> Manage Product</button></Link>
                <br/>
                <Link to='/addProduct'><button className="btn btn-info ml-5 px-4"><FontAwesomeIcon icon={faPlusSquare} /> ADD Product</button></Link>
            </div>
            <div className="col-md-8">
                <AddProduct />
            </div>

        </div>
    );
};

export default Admin;