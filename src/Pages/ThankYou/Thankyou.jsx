import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Thankyou() {
  return (
    <div>
        <Navbar/>
        <div style={{textAlign:"center"}}>
        <h3>Thank You for Shopping with us.Your Order will be delivered to you within 4 working days.Your Order Id is BZQM48484890233.</h3>
        <Link to='/'>Click here to continue shopping</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default Thankyou