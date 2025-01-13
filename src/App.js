
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './screens/Login';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from './screens/Signup.js';
import { CartProvider } from './components/ContextReducer.js';
// import Cart from './screens/Cart.js';
import MyOrder from './screens/MyOrder.js';
import Menu from './screens/Menu.js';
// import Modal from './Modal.js';
// import Cart from './screens/Cart.js';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Menu/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/createuser' element={<Signup />} />
          <Route path='/myorder' element={<MyOrder/>} />
       
        </Routes>
      </Router>

    </CartProvider>

  );
}

export default App;
