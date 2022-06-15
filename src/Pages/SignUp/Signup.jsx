import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className='signup-main'>
        <div><img style={{height:"60px",width:"120px"}} src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" alt="" /></div>
        
        <div className='signup-container'>
            <h2 style={{marginBottom:"20px",marginTop:"30px"}}>Create Account</h2>
            <label className='sign-label'>Your Name</label>
            <br />
            <input className='sign-input-box' type="text" />

            <br />
            <label className='sign-label2'>Email</label>
            <br />
            <input className='sign-input-box' type="text" />
            <br />
            <label className='sign-label4'>Password</label>
            <br />
            <input className='sign-input-box' type="text" />
            <br />
            <label className='sign-label3'>Re-enter Password</label>
            <br />
            <input className='sign-input-box' type="text" />
            <button className='sign-button'>Create Your Zappos Account</button>

            <div>Don't have an email address or need additional help?</div>
            <div>Don't worry! Give us a call at (800) 927-7671</div>
            <div>Registering means you agree to the Zappos terms of use and privacy policy</div>
        </div>
    </div>
  )
}

export default Signup