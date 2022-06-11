import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import StormOutlinedIcon from '@mui/icons-material/StormOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer1'>
            <h3>Make Zappos (Emails) Your New BFF!</h3>
            <div className='footer-inner1'>
                <div>Email</div>
                <div className='footer-inner2'>
                  <div><input type="text" name="" id="" placeholder='Email Address'/></div>
                  <div><button><DraftsOutlinedIcon /><span>SUBSCRIBE TO ZAPPOS EMAIL</span></button></div>
                </div>
            </div>
        </div>

        <div style={{backgroundColor:"rgb(1,57,83)"}}>
        <div className='footer2'>

            <div className='innerdiv3'>
              <div className='title'>Explore Zappos</div>
              <div className='inner-div4'>
                <div className='inner-text'>Brands</div>
                <div className='inner-text'>Clothing</div>
                <div className='inner-text'>The Style Room</div>
                <div className='inner-text'>Eyeware</div>
                <div className='inner-text'>New Arrivals</div>
                <div className='inner-text'>Outdoor</div>
                <div className='inner-text'>Rideshops</div>
                <div className='inner-text'>Running</div>
                <div className='inner-text'>Jackets</div>
                <div className='inner-text'>Leather Jackets</div>
                <div className='inner-text'>Rain Jackets</div>
                <div className='inner-text'>Shoes</div>
                <div className='inner-text'>Watches</div>
                <div className='inner-text'>Wedding</div>
                <div className='inner-text'>Denim Jackets</div>
                <div className='inner-text'>Zappos Adaptive</div>
                <div className='inner-text'>Education and Military Program</div>
                <div className='inner-text'>Father's Day Gift Guide</div>
                <div className='inner-text'>All Departments</div>
              </div>
            </div>


            <div style={{display:"flex",flexDirection:"column",gap:"75px"}}>
              <div className='innerdiv3'>
                <div className='title'>Customer Service</div>
                <div className='inner-div4'>
                  <div className='inner-text'>FAQ's</div>
                  <div className='inner-text'>Contact Info</div>
                  <div className='inner-text'>¿Ayuda en español?</div>
                  <div className='inner-text'>Shipping And Returns Policy</div>
                  <div className='inner-text'>About Proposition 65</div>
                </div>
              </div>
              <div className='innerdiv3'>
                <div className='title'>Fit Info</div>
                <div className='inner-div4'>
                  <div className='inner-text'>FAQ's</div>
                  <div className='inner-text'>Measurement Guide</div>
                  <div className='inner-text'>Size Conversion Chart</div>
                  <div className='inner-text'>Measure Your Bra Size</div>
                </div>
              </div>
            </div>



            <div style={{display:"flex",flexDirection:"column",gap:"75px"}}>
              <div className='innerdiv3'>
                <div className='title'>About Zappos</div>
                <div className='inner-div4'>
                  <div className='inner-text'>About</div>
                  <div className='inner-text'>Zappos ONE</div>
                  <div className='inner-text'>Zappos for good</div>
                  <div className='inner-text'>Get the Zappos Mobile App</div>
                  <div className='inner-text'>Amazon Prime Benefits</div>
                  <div className='inner-text'>Zappos VIP Benefits</div>
                  <div className='inner-text'>Powered by Zappos</div>
                  <div className='inner-text'>Coupons</div>
                  <div className='inner-text'>Accessibility Statement</div>
                  <div className='inner-text'>Accessibility Survey</div>
                  <div className='inner-text'>Beyond the Box Blog</div>
                </div>
              </div>
              <div className='innerdiv3'>
                <div className='title'>Resources</div>
                <div className='inner-div4'>
                  <div className='inner-text'>Associates Program</div>
                  <div className='inner-text'>Influencer Program</div>
                  <div className='inner-text'>Jobs</div>
                  <div className='inner-text'>Press Kit</div>
                  <div className='inner-text'>Glossary of Terms</div>
                  <div className='inner-text'>Site Map</div>
                </div>
              </div>
            </div>


            <div style={{display:"flex",flexDirection:"column",gap:"45px"}}>
              <div style={{height:"200px",width:"350px",backgroundColor:"rgb(21,72,96",marginTop:"-27px"}}>
                <div className='side-div-title'>Your Voice Matters</div>
                <div className='side-inner-text'>We'd love to learn more about your shopping experiences on Zappos.com and how we can improve!</div>
                <button className='button'><StormOutlinedIcon/>Take Survey</button>
              </div>
              <div>
                <div className='title'>Connect With Us</div>
                <div style={{display:"flex",gap:"10px",marginTop:"15px",color:"white"}}>
                  <a className='anc' href='https://www.facebook.com/zappos' target="_blank"><FacebookIcon fontSize='large'/></a>
                  <a className='anc' href='https://www.instagram.com/zappos/' target="_blank"><InstagramIcon fontSize='large'/></a>
                  <a className='anc' href='https://twitter.com/zappos' target="_blank"><TwitterIcon fontSize='large'/></a>
                  <a className='anc' href='https://www.pinterest.com/zappos/' target="_blank"><PinterestIcon fontSize='large'/></a>
                  <a className='anc' href='https://www.youtube.com/user/zappos' target="_blank"><YouTubeIcon fontSize='large'/></a>
                </div>
              </div>
            </div>
        </div>
        <hr className='hr' />
        

        <div style={{display:"flex",gap:"10px",marginLeft:"3.8%",marginTop:"15px"}}>
          <div className='inner-text'>Terms of Use</div>
          <div className='inner-text'>|</div>
          <div className='inner-text'>Privacy Policy</div>
          <div className='inner-text'>|</div>
          <div className='inner-text'>Fur Policy</div>
          <div className='inner-text'>|</div>
          <div className='inner-text'>Interest-Based Ads</div>
          <div className='inner-text'>|</div>
          <div className='inner-text'>24/7 Customer Service (800) 927-7671</div>
        </div>

        <div className='last-text'>© 2009–2022 - Zappos.com LLC or its affiliates</div>
      </div>
        
    </div>
  )
}

export default Footer