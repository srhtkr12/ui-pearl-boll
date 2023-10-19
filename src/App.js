import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Layouts from './layouts/Layouts';
import Home from '../src/views/Home'
import Products from '../src/views/Products';
import Product from '../src/views/Product';
import User from '../src/views/User';
import Profile from '../src/views/Profile'
import Login from '../src/views/Login'
import Register from '../src/views/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          {/* Users */}
          <Route path='apps/user' element={<User />} >
            <Route path='profile' element={<Profile />} />
          </Route>
          {/* Products */}
          <Route path='apps/products' element={<Products />} />
          <Route path='apps/products/product/:id' element={<Product />} />
          {/* </Route> */}
          {/* Admin */}
        </Route>
        {/* Default Pages */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
