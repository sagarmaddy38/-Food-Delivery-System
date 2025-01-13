
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from './ContextReducer'; // make sure useCart is properly implemented
import Modal from '../Modal'; // Ensure Modal component works
import Cart from '../screens/Cart'; // Ensure Cart component receives props correctly

export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  let navigate = useNavigate();
  const items = useCart(); // get cart items from context

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const loadCart = () => {
    setCartView(true); // Show cart modal when clicked
  };

  const closeCart = () => {
    setCartView(false); // Close cart modal when modal close button is clicked
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-info position-sticky"
        style={{
          boxShadow: '0px 10px 20px black',
          position: 'fixed',
          zIndex: '10',
          width: '100%',
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link fs-5 mx-3 active"
                  aria-current="page"
                  to="/"
                >
                  Menu
                </Link>
              </li>
              {localStorage.getItem('token') && (
                <li className="nav-item">
                  <Link
                    className="nav-link fs-5 mx-3 active"
                    aria-current="page"
                    to="/myorder"
                  >
                    My Orders
                  </Link>
                </li>
              )}
            </ul>


            {!localStorage.getItem('token') ? 
              <form className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">
                  Signup
                </Link>
              </form>
             : 
              <div>
                <div className="btn bg-white text-success mx-2" onClick={loadCart}>
                  <Badge color="secondary" badgeContent={items.length}>
                    <ShoppingCartIcon />
                  </Badge>
                  Cart
                </div>

                {cartView && (
                  <Modal onClose={closeCart}>
                    <Cart  /> {/* Pass items to Cart */}
                  </Modal>
                )}

                <button onClick={handleLogout} className="btn bg-white text-success">
                  Logout
                </button>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}






