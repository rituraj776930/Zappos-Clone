import React from 'react'
import { useState } from 'react'
// import '../../../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import './Products.css'
import data from '../../data.json'
import SingleProduct from '../SingleProduct/SingleProduct'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Products() {
  const [sort,setsort] = useState("")
  const [size,setsize] = useState("")
  const [color,setcolor] = useState("")
  const [brand,setbrand] = useState("")
  
  return (
    <>
    <Navbar/>
    <div style={{marginLeft:"30px"}}>
      <div style={{display:"flex",justifyContent:'space-between'}}>
        <h1>Men's Shirts & Tops</h1>
        <div>Sort By  
        <select className='products-select-tag' name="cars" id="cars" onChange={(e)=>setsort(e.target.value)} >
              <option value="">Relevance</option>
              <option value="H2L">Price:High to Low</option>
              <option value="L2H">Price:Low to High</option>
              <option value="CR">Customer Rating</option>
              <option value="re">Popularity</option>
          </select>
        </div>
      </div>
      <div style={{marginTop:"-10px",marginBottom:"20px"}}>44 items found</div>
    </div>

    <div className='products'>
      <div className='filter'>
          <h2>Filter By :</h2>
          <select className='products-select-tag' name="cars" id="cars" onChange={(e)=>setsize(e.target.value)} >
              <option value="">Mens Size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
          </select>
          <br />
          <select className='products-select-tag' name="cars" id="cars" onChange={(e)=>setcolor(e.target.value)}>
              <option value="" >Color</option>
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="white">White</option>
              <option value="red">Red</option>
          </select>
          <br />
          <select className='products-select-tag' name="cars" id="cars" onChange={(e)=>setbrand(e.target.value)}>
              <option value="" >Brand</option>
              <option value="RVCA">RVCA</option>
              <option value="adidas">Adidas</option>
              <option value="Rip Curl">RIP CURL</option>
              <option value="VANS">Vans</option>
          </select>


      </div>

      <div className='products-main'>
        {size ? data.mens.filter((item)=>item.size=== size).map((item)=><SingleProduct key={item.id} item={item}/>)
              : color
              ? data.mens.filter((item)=>item.color=== color).map((item)=><SingleProduct key={item.id} item={item}/>)
              : brand
              ? data.mens.filter((item)=>item.brand=== brand).map((item)=><SingleProduct key={item.id} item={item}/>)
              : sort==='H2L'
              ? data.mens.sort((a,b)=>b.price-a.price).map((item)=><SingleProduct key={item.id} item={item}/>)
              : sort ==='L2H'
              ? data.mens.sort((a,b)=>a.price-b.price).map((item)=><SingleProduct key={item.id} item={item}/>)
              : sort === 'CR'
              ? data.mens.sort((a,b)=>b.rating-a.rating).map((item)=><SingleProduct key={item.id} item={item}/>)
              : sort === 're'
              ? data.mens.sort((a,b)=>b.reviews-a.reviews).map((item)=><SingleProduct key={item.id} item={item}/>)
              : data.mens.map((item)=><SingleProduct key={item.id} item={item}/>)
        }
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Products

// data.mens.map((item)=><SingleProduct item={item}/>)