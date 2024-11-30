
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import RestaurantDetails from '../Restaurant/RestaurantDetails'
import Cart from '../Cart/Cart'
import Profile from '../profile/Profile'

const CustomerRouter = () => {
  return (
    <div>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/account/:register' element={<Home />}></Route>
            <Route path='/restaurant/:city/:title/:id' element={<RestaurantDetails />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/my-profile/*' element={<Profile />}></Route>
        </Routes>
    </div>
  )
}

export default CustomerRouter


//  /my-profile/orders