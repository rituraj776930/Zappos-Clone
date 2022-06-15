import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function SingleProduct({item}) {
    const navigate = useNavigate()

    const handleClick=()=>{
        localStorage.setItem("singledata" , JSON.stringify(item))
        navigate(`/products/${item.id}`)
    }
  return (
    <div onClick={handleClick} style={{height:"460px",width:"260px",display:"flex",flexDirection:"column",gap:"5px"}}>
        <div><img style={{height:"330px",width:"230px"}} src={item.imageUrl1} alt="" /></div>
        <div style={{fontSize:"15px",fontWeight:"bolder"}}>{item.brand}</div>
        <div>{item.name}</div>
        <div>${item.price}</div>
        <div>{item.rating}☆  ({item.reviews})</div>
    </div>
  )
}

export default SingleProduct