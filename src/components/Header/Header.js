import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="mb-5">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand" ><h2 className="ml-5 mobile">Mobile Bazar</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            <Link to="/orders" className="nav-link" >Orders</Link>
                            <Link to="/admin" className="nav-link" >Admin</Link>
                            <h6 className="nav-link">{loggedInUser.isSignedIn ? loggedInUser.name : <Link to="/login" className="nav-link"><button className="btn btn-success">Log in</button></Link>} </h6>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;