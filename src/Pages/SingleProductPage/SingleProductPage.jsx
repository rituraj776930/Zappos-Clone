import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { addtocart } from '../../Redux/action'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './SingleProductPage.css'

function SingleProductPage() {
    const singledata = JSON.parse(localStorage.getItem("singledata"))
    let cartdata = useSelector((state)=>state.cartdata)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick=(singledata)=>{
        console.log(singledata)
        dispatch(addtocart(singledata))
        navigate("/cart")

    }
  return (
    <div>
        <Navbar/>
        <div className='single-main'>
            <div className='single-img-div'>
                <img className='small-img' src={singledata.imageUrl1} alt="" />
                <img className='small-img' src={singledata.imageUrl2} alt="." />
            </div>
            <div className='img-div2'><img className='big-img' src={singledata.imageUrl1} alt="" /></div>

            <div>
                <h2>{singledata.brand}</h2>
                <h3>{singledata.name}</h3>
                <h1>${singledata.price}</h1>
                <p>or 4 interest-free payments of $10.31 with afterpay</p>
                <div style={{display:"flex",gap:"15px"}}>
                    <div>Ships Free</div>
                    <div style={{marginTop:"-3px"}}>{singledata.rating}☆ ({singledata.reviews})</div>
                </div>
                <div style={{marginTop:"30px"}}>Color</div>
                <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                    <div style={{height:"50px",width:"50px",backgroundColor:"black"}}></div>
                    <div style={{height:"50px",width:"50px",backgroundColor:"blue"}}></div>
                    <div style={{height:"50px",width:"50px",backgroundColor:"yellow"}}></div>
                    <div style={{height:"50px",width:"50px",backgroundColor:"red"}}></div>
                    <div style={{height:"50px",width:"50px",backgroundColor:"orange"}}></div>
                    <div style={{height:"50px",width:"50px",backgroundColor:"grey"}}></div>
                    <div style={{height:"50px",width:"50px",backgroundColor:"green"}}></div>
                    <div style={{height:"50px",width:"50px",backgroundColor:"purple"}}></div>
                </div>
                <div style={{marginTop:"30px"}}>Mens Size</div>
                <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                    <div style={{height:"33px",width:"50px",backgroundColor:"rgb(225,225,225",textAlign:"center",paddingTop:"15px"}}>S</div>
                    <div style={{height:"33px",width:"50px",backgroundColor:"rgb(225,225,225",textAlign:"center",paddingTop:"15px"}}>M</div>
                    <div style={{height:"33px",width:"50px",backgroundColor:"rgb(225,225,225",textAlign:"center",paddingTop:"15px"}}>L</div>
                    <div style={{height:"33px",width:"50px",backgroundColor:"rgb(225,225,225",textAlign:"center",paddingTop:"15px"}}>XL</div>
                    <div style={{height:"33px",width:"50px",backgroundColor:"rgb(225,225,225",textAlign:"center",paddingTop:"15px"}}>XXL</div>
                </div>

                <div onClick={()=>handleClick(singledata)} style={{marginTop:"30px"}}><button className='add-to-cart-button'>Add To Cart</button></div>
                <div style={{marginLeft:"110px",marginTop:"20px"}}>FREE upgraded shipping & returns with</div>
                <div style={{marginLeft:"210px",marginTop:"10px"}}>Amazon Prime</div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleProductPage