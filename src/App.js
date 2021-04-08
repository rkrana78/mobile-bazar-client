import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import AddProduct from './components/AddProduct/AddProduct';
import CheckOut from './components/CheckOut/CheckOut';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageProduct from './components/ManageProduct/ManageProduct';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <div>
            <Header />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <PrivateRoute path="/orders">
                <Orders />
              </PrivateRoute>
              <PrivateRoute path="/addProduct">
                <AddProduct />
              </PrivateRoute>
              <PrivateRoute path="/manageProduct">
                <ManageProduct />
              </PrivateRoute>
              <PrivateRoute path="/checkout/:id">
                <CheckOut />
              </PrivateRoute>
            </Switch>
          </div>
        </Router>
      </UserContext.Provider>
    </div >
  );
}

export default App;
