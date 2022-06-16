import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './CartPAge/Cart'
import Checkout from './Checkout/Checkout'
import Home from './HomePage/Home'
import Otp from './OtpPage/Otp'
import PrivateAuth from './PrivateAuth'
import Products from './Products/Products'
import SignIn from './Signin/SignIn'
import Signup from './SignUp/Signup'
import SingleProductPage from './SingleProductPage/SingleProductPage'
import Thankyou from './ThankYou/Thankyou'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<SingleProductPage/>}/>
            <Route path='/cart' element={
              <PrivateAuth>
                <Cart/>
              </PrivateAuth>
            }/>
            <Route path='/checkout' element={
              <PrivateAuth>
                <Checkout/>
              </PrivateAuth>
            }/>
            <Route path='/otp' element={
              <PrivateAuth>
                <Otp/>
              </PrivateAuth>
            } />
            <Route path='/thankyou' element={<Thankyou/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes