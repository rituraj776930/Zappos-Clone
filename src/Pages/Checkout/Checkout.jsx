import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Checkout.css'

function Checkout() {
    const navigate = useNavigate()
    const total = useSelector((state)=>state.total_price)
    const [name,setname] = useState("")
    const [address,setaddress] = useState("")
    const [building,setbuilding] = useState("")
    const [city,setcity] = useState("")
    const [state,setstate] = useState("")
    const [zip,setzip] = useState("")
    const [phone,setphone] = useState("")
    const [flag,setflag] = useState(false)

    const [cardNumber,setcardNumber] = useState("") 
    const [cardName,setcardName] = useState("")
    const [cvv,setcvv] = useState("")
    const [expDate,setexpDate] = useState("")
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name && address && building && city && state && zip && phone){
            setflag(true)
        }
        else{
            alert("Please fill all the fields")
        }
    }

    const handleSubmit2=(e)=>{
        e.preventDefault()
        if(cardNumber && cardName && cvv && expDate){
            navigate("/otp")
        }
        else{
            alert("Please fill all the fields")
        }
    }
  return (
    <div>
<Navbar/>
<div className="container">
        <div className="payment">
            <h3>1. Shipping</h3>
            <div className="shipping">
                <form onSubmit={handleSubmit} className={flag ? "form1" : "form5"}>
                    <h4>Shipping Address</h4>
                    <input type="text" placeholder="Full Name" className="name" onChange={(e)=>setname(e.target.value)} /><br/>
                    <input type="text" placeholder="Address" className="addr" onChange={(e)=>setaddress(e.target.value)} /><br/>
                    <input type="text" placeholder="Apt,Suite,Building (Optional)" onChange={(e)=>setbuilding(e.target.value)} /><br/>
                    <div className="flex">
                        <input type="text" placeholder="City" onChange={(e)=>setcity(e.target.value)}/>
                        <input type="text" placeholder="State" onChange={(e)=>setstate(e.target.value)}/>
                        <input type="number" placeholder="Zip" className="zip" onChange={(e)=>setzip(e.target.value)}/>
                    </div>
                    <input type="number" placeholder="Phone" onChange={(e)=>setphone(e.target.value)}/><br/>
                    <div className="button"><input type="submit"  value="Continue" className="continue"/></div>
                </form>
                
            </div>
            <h3>2. Payment Details</h3>
            <div className={flag ? "form4" : "form1"}>
                <form onSubmit={handleSubmit2}>
                    <input type="number" placeholder="Enter Card Number" className="cardno" onChange={(e)=>setcardNumber(e.target.value)} />
                    <input type="text" placeholder="Enter Card Holder Name" className="cardname" onChange={(e)=>setcardName(e.target.value)}/>
                    <input type="number" placeholder="Enter CVV" className="cvv" onChange={(e)=>setcvv(e.target.value)}/>
                    <input type="date" placeholder="Enter Expiry Date" className="date" onChange={(e)=>setexpDate(e.target.value)}/>
                    <div className="button"><input value="Make Payment" type="submit" className="continue"/></div>
                </form>
                
            </div>
        </div>
        <div className="orderSummary">
        <h3>Order Summary</h3>
        <div className="subTotal">Total Amount : ${total}</div>
        <p>Total does not include shipping, gift wrap, discounts & tax.</p>
        <h5></h5>
        <h5 className="discount">EARN 30% BACK IN REWARDS</h5>
        <p>during your first 30 days as a cardmember2, or get 12-month special financing on purchases of $750+.3 Learn More</p>
        <h4>Click On The Banner To Get Discount</h4>
        <img src="https://s3u.tmimgcdn.com/u2360088/629e2d55ed438445018db18675cc471b.jpg" alt=""  className="reward"/>
        <img src="https://assets-global.website-files.com/5e16fd99ef00e72f286ce1bc/5f314a917d8a082710e8fa4c_applied-logo-website-18pt.svg" alt="" className="reward1"/>
        <p>Rewards earnings are subject to the Gold Key Rewards Terms and Credit Card Terms in the Customer Agreement.3 New customers earn an additional 5% back in rewards (30% back total) for purchases made at Williams-Sonoma, Inc. brands during the first 30 days from account opening.For Important Rate, Fee, and other Cost information select Terms and Conditions.Credit card offers are subject to credit approval.Pottery Barn Accounts are issued by Capital One.</p>
    </div>
    </div>
    <div className="popup">
        <button className="close">&times;</button>
        <h2>Enjoying Shopping With Us!!!!!</h2>
        <h3>Get 30% Instant Discount</h3>
        <p>Please enter a ValclassName Coupon</p>
        <input type="text" className="discountInput"/>
        <button className="popupLogin">Apply</button>

    </div>
<Footer/>
    </div>
  )
}

export default Checkout

// style="wclassNameth: 100%; cursor: pointer" 