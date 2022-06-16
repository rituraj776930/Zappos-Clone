import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addquantity, reducequantity, removeCart } from '../../Redux/action'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Cart.css'


function Cart() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cartdata = useSelector((state)=>state.cartdata)
  const total = useSelector((state)=>state.total_price)
  const handleClick1 = (item)=>{
    dispatch(reducequantity(item))
  }
  const handleClick2 = (item)=>{
    dispatch(addquantity(item))
  }
  const handleRemoval = (item)=>{
    console.log("in function")
    dispatch(removeCart(item))
  }
  return (
    <div>
      <Navbar/>
        <h1>{cartdata.length} Items in my cart</h1>
        <div style={{display:"flex",justifyContent:"space-between",width:"940px",height:"35px",backgroundColor:"rgb(1,57,83"}}>
          <div style={{margin:"8px 0 0 30px",color:"white"}}>Item</div>
          <div style={{margin:"8px 30px 0 0",color:"white"}}>Price/Quantity</div>
        </div>
       <div style={{display:"flex",gap:"10px"}}>
         <div>{cartdata.length ? 
        <div className='product-cart-div'> 
          {cartdata.map((item)=>{
            return(
              <div key={item.id} style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
                <div style={{display:"flex"}} >
                  <img className='image-cart' src={item.imageUrl1} alt="" />
                  <div>
                    <div>{item.brand}</div>
                    <div>{item.name}</div>
                    <div>Color:{item.color}</div>
                    <div>Size:{item.size}</div>
                    <div onClick={()=>handleRemoval(item)} style={{marginTop:"40px",cursor:"pointer",fontSize:"17px",fontWeight:"bolder",font:"sans-sarif"}}>Remove</div>
                  </div>
                </div>
                
              <div style={{display:"flex",marginRight:"50px"}}>
                <div><button onClick={()=>handleClick1(item)}>-</button></div>
                <div>{item.quantity}</div>
                <div><button onClick={()=>handleClick2(item)}>+</button></div>
              </div>

              
              </div>
            )
          })}
        </div> : <div className='product-cart-div'><h2>Please Add some items in cart</h2></div>}
        </div>
         <div> 
          <div style={{height:"160px",width:"500px",marginTop:"-35px",backgroundColor:"rgb(245,245,245"}}>
            <div><button onClick={()=>navigate("/checkout")} className='checkout-button'>PROCEED TO CHECKOUT</button></div>
            <div style={{margin:"10px 0 0 25px"}}>Have a Promotional Code? Proceed to checkout to redeem it.</div>
            <h3 style={{marginLeft:"25px"}}>Cart Summary ({cartdata.length} Items)</h3>
            <div style={{display:"flex",justifyContent:"space-between",margin:"-30px 25px 0 25px"}}>
              <h4>Subtotal ({cartdata.length} items)</h4>
              <h4>$ {total}</h4>
            </div>
          </div>
          <div style={{height:"auto",width:"500px",color:"rgb(112,112,112",margin:"23px 0 0 0"}}>Zappos.com LLC is required by law to collect sales tax on orders shipped to specific states. Appropriate charges will be added to your merchandise total and displayed for your review at checkout.</div>
          <div style={{height:"auto",width:"500px",color:"rgb(112,112,112",margin:"23px 0 0 0"}}>Unless otherwise noted, all products are sold by Zappos.com LLC.</div>
        </div>

      </div>



       <Footer/>
    </div>
  )
}

export default Cart