import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateAuth({children,to}) {
  const auth = useSelector((state)=>state.auth)
  if(auth){
      return children
  }
  return(
      <Navigate to={"/signin"}/>
  )
}

export default PrivateAuth