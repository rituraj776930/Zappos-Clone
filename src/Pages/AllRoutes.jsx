import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './CartPAge/Cart'
import Home from './HomePage/Home'
import Products from './Products/Products'
import SingleProductPage from './SingleProductPage/SingleProductPage'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<SingleProductPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes