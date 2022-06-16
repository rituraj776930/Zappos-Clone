import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { addDataToSignUp } from '../../Redux/action'
import './Signup.css'

function Signup() {
  const signup_data = useSelector((state)=>state.signup_data)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name , setname] = useState("")
  const [email , setemail] = useState("")
  const [password , setpassword] = useState("")
  const [repassword , setrepassword] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(password,password)
    console.log(signup_data)
    let payload = {
      name:name,
      email:email,
      password:password
    }
    console.log("payload:",payload)
    let flag = false
    if(name && email && password && repassword){
      if(password != repassword){
        alert("Passwords do not match")
      }
      else{
        signup_data.map((item)=>{
          console.log(item.email,payload.email,item.password,payload.password)
        if(item.email == payload.email && item.password == payload.password){
          console.log("llll")
          flag = true
        }
        })
        if(flag==true){
          alert("Already Registered")
          navigate("/signin")
          
        }
        else{
          console.log("ggg")
          dispatch(addDataToSignUp(payload))
          alert("Sign Up successful")
          navigate("/signin")
        }
      }
    }
    else{
      alert("Please fill all the Credentials")
    }
    
  }
  return (
    <div className='signup-main'>
        <div><img style={{height:"60px",width:"120px"}} src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" alt="" /></div>
        
        <div className='signup-container'>
            <h2 style={{marginBottom:"20px",marginTop:"30px"}}>Create Account</h2>
          <form onSubmit={handleSubmit}>
            <label className='sign-label'>Your Name</label>
            <br />
            <input className='sign-input-box' type="text" onChange={(e)=>setname(e.target.value)} />

            <br />
            <label className='sign-label2'>Email</label>
            <br />
            <input className='sign-input-box' type="email" onChange={(e)=>setemail(e.target.value)} />
            <br />
            <label className='sign-label4'>Password</label>
            <br />
            <input className='sign-input-box' type="password" onChange={(e)=>setpassword(e.target.value)} />
            <br />
            <label className='sign-label3'>Re-enter Password</label>
            <br />
            <input className='sign-input-box' type="password" onChange={(e)=>setrepassword(e.target.value)} />
            <button type='submit' className='sign-button'>Create Your Zappos Account</button>
          </form>

            <div style={{margin:"20px 15px 0 15px"}}>Don't have an email address or need additional help?</div>
            <div style={{margin:"0 0 0 10px"}}>Don't worry! Give us a call at (800) 927-7671</div>
            <div style={{margin:"20px 15px 0 15px"}}>Registering means you agree to the Zappos terms of use and privacy policy</div>
            <div>
              <div>Already have an account ? <Link to="/signin">Sign In</Link></div>
            </div>
        </div>
    </div>
  )
}

export default Signup