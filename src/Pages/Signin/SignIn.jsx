import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { addDataToSignUp, setauth, setCredentials } from '../../Redux/action'
import './Signin.css'


function SignIn() {
    const signup_data = useSelector((state)=>state.signup_data)
    const auth = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    let payload = {
        name:"",
        email:email,
        password:password
    }
    let flag = false
    signup_data.map((item)=>{
        if(item.email == payload.email && item.password == payload.password){
            payload.name = item.name
            flag = true
        }
        
    })
    if(flag == true){
        console.log(payload)
        dispatch(setCredentials(payload))
        dispatch(setauth())
        console.log(auth)
        alert("Yeah ! Login Successful")
        navigate("/cart")
    }
    else{
        alert("Inavalid Credentials")
    }

  }
  return (
    <div className='signup-main'>
        <div><img style={{height:"60px",width:"120px"}} src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" alt="" /></div>
        
        <div className='signup-container2'>
            <h2 style={{marginBottom:"20px",marginTop:"30px"}}>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <label className='sign-label2'>Email</label>
            <br />
            <input className='sign-input-box' type="email" onChange={(e)=>setemail(e.target.value)} />
            <br />
            <label className='sign-label4'>Password</label>
            <br />
            <input className='sign-input-box' type="password" onChange={(e)=>setpassword(e.target.value)} />
            <br />
            <button type='submit' className='sign-button'>Sign In</button>
          </form>

            <div style={{margin:"30px 0 10px 0",color:"rgb(126,126,126)",fontWeight:"bold"}}>New To Zappos</div>
             <button onClick={()=>navigate("/signup")} type='submit' className='sign-button'>Create your Zappos Account</button>
        </div>
    </div>
  )
}

export default SignIn