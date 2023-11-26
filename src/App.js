import './App.css';
import Home from '../src/views/Home'
import User from '../src/views/User';
import Login from '../src/views/Login'
import Layouts from './layouts/Layouts';
import Profile from '../src/views/Profile'
import Product from '../src/views/Product';
import Register from '../src/views/Register'
import Products from '../src/views/Products';
import { Routes, Route } from 'react-router-dom'

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
