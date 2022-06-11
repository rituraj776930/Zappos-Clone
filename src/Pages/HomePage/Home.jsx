import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
        <div><img className='home-img1' src="https://m.media-amazon.com/images/G/01/2022/homepage6.02/SO-Skinny-Banner-2880x650_2._CB1198675309_.png" alt="" /></div>
        <div><img className='home-img1' src="https://m.media-amazon.com/images/G/01/2022/homepage6.06/COOP-SO-UGG-HERO-2880x1400.jpg" alt="" /></div>
        <div style={{marginLeft:"50px"}}>
            <div className='home-title'>Shop Popular Categories</div>
            <div className='home-flex-div'>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px"}} src="https://m.media-amazon.com/images/I/71U7e7IRHSL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Sneakers & Athletic Shoes</div>
                </div >
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px",}} src="https://m.media-amazon.com/images/I/71H1zKI3q5L._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Sandals</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{height:"280px",width:"120px"}} src="https://m.media-amazon.com/images/I/71gw6D5NE+L._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Dresses</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px",}} src="https://m.media-amazon.com/images/I/71NI4oqYMuL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Loafers</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{height:"280px",width:"90px"}} src="https://m.media-amazon.com/images/I/51lEd4lr0KL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Swimwear</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"140px",width:"195px",}} src="https://m.media-amazon.com/images/I/71F2QuFXVIL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Clogs</div>
                </div>
            </div>
        </div>

        <div className='home1'>
            <div>
                <div><img style={{height:"100%",width:"90%"}} src="https://m.media-amazon.com/images/G/01/2022/homepage6.06/BROADCAST-FASHION-SNEAKERS-JUNE-TRIPTYCH-500X500.jpg" alt="" /></div>
                <h3>Sneaker Standouts for Summer</h3>
                <div>Look for bright colors, chunky soles, and multi-tone styling!</div>
                <div className='home1-title'>SHOP WOMEN’S FASHION SNEAKERS</div>
            </div>
            <div>
                <div><img style={{height:"100%",width:"90%"}} src="https://m.media-amazon.com/images/G/01/2022/homepage6.06/BROADCAST-CASUAL-DRESSES-JUNE-TRIPTYCH-500X500.jpg" alt="" /></div>
                <h3>Easy Dresses = Infinite Style for Your Life</h3>
                <div>Made for running errands, brunching, sightseeing, and beyond!</div>
                <div className='home1-title'>SHOP CASUAL DRESSES</div>
            </div>
            <div>
                <div><img style={{height:"100%",width:"90%"}} src="https://m.media-amazon.com/images/G/01/2022/homepage6.06/BROADCAST-SUSTAINABLE-SNEAKERS-MENS-JUNE-TRIPTYCH-500X500.jpg" alt="" /></div>
                <h3>Our Sustainable Spotlight: Men’s Sneakers</h3>
                <div>Explore sneaker brands focused on making the world a better place</div>
                <div className='home1-title'>SHOP WOMEN’S FASHION SNEAKERS</div>
            </div>
        </div>

        <div><img style={{width:"97%",margin:"50px 20px 50px 20px"}} src="https://m.media-amazon.com/images/G/01/2022/homepage5.31/HP-PRIDE-SKINNY-BANNER-2880x400.png" alt="" /></div>
        
        <div className='home2'>
            <div style={{height:"600px",width:"600px",backgroundColor:"rgb(254,230,121)",border:"1px solid black"}}>
                <img style={{margin:"130px 0 0 140px"}} src="https://m.media-amazon.com/images/G/01/2022/homepage6.06/COOP-NEW-ARRIVAL-LOGO-1X-01.svg" alt="" />
                <div style={{fontSize:"20px",margin:"20px 50px 20px 50px",textAlign:"center",letterSpacing:"1px",fontWeight:"bold"}}>Celebrate Pride with UGG®: Rainbows meet fluff meets very happy feet.</div>
                <div><button className='home1-button'>Shop UGG Pridr Styles</button></div>
            </div>
            <div style={{height:"600px",width:"600px"}}>
                <img style={{height:"600px",width:"600px"}} src="https://m.media-amazon.com/images/G/01/2022/homepage6.06/COOP-UGG-PRIDE-NEW-ARRIVALS-DESKTOP-RIGHT-2X-1268x1268.jpg" alt="" />
            </div>
        </div>

        <div className='home3'>
            <div style={{height:"500px",width:"500px",}}>
                <div style={{fontSize:"20px",margin:"120px 50px 20px 50px",textAlign:"center",letterSpacing:"1px",fontWeight:"bold"}}>Crocs & UGG®: Our 2022 Special Olympics USA Games Collabs</div>
                <div style={{margin:"20px 50px 20px 50px",textAlign:"center",fontSize:"18px"}}>Celebrate the Games with cool, comfy styles that are easy to wear and easy to love!</div>
                <div><button className='home2-button'>Shop Crocs, UGG® & More</button></div>
            </div>
            <div><img style={{height:"500px",width:"1030px"}} src="https://m.media-amazon.com/images/G/01/2022/homepage6.06/COOP-SO-UGG-CROCS-AOE-1920x1000_copy.jpg" alt="" /></div>
        </div>

        <div style={{marginLeft:"50px"}}>
            <div className='home-title'>Popular Items</div>
            <div className='home-flex-div'>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px"}} src="https://m.media-amazon.com/images/I/71U7e7IRHSL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Sneakers & Athletic Shoes</div>
                </div >
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px",}} src="https://m.media-amazon.com/images/I/71H1zKI3q5L._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Sandals</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{height:"280px",width:"120px"}} src="https://m.media-amazon.com/images/I/71gw6D5NE+L._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Dresses</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px",}} src="https://m.media-amazon.com/images/I/71NI4oqYMuL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Loafers</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{height:"280px",width:"90px"}} src="https://m.media-amazon.com/images/I/51lEd4lr0KL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Swimwear</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"140px",width:"195px",}} src="https://m.media-amazon.com/images/I/71F2QuFXVIL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Clogs</div>
                </div>
            </div>
        </div>

        <div className='home4'>
            <div><img style={{height:"500px",width:"1000px"}} src="https://m.media-amazon.com/images/G/01/2020/birkenstock/FASHION-THE-STYLE-ROOM-PREP-LEISURE-JUNE-1920x1000.jpg" alt="" /></div>
            <div style={{height:"500px",width:"500px",}}>
                <div style={{fontSize:"20px",margin:"120px 50px 20px 50px",textAlign:"center",ng:"1px",fontWeight:"bold"}}>THE STYLE ROOM</div>
                <h2 style ={{letterSpacimargin:"120px 50px 20px 50px",textAlign:"center",ng:"1px"}}>Prep Leisure</h2>
                <div style={{margin:"20px 50px 20px 50px",textAlign:"center",fontSize:"18px"}}>Shop Prep-Leisure</div>
                <div><button className='home2-button'>Shop Prep Leisure</button></div>
            </div>
        </div>

        <div style={{marginLeft:"50px"}}>
            <div className='home-title'>Popular Items</div>
            <div className='home-flex-div'>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px"}} src="https://m.media-amazon.com/images/I/71U7e7IRHSL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Sneakers & Athletic Shoes</div>
                </div >
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px",}} src="https://m.media-amazon.com/images/I/71H1zKI3q5L._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Sandals</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{height:"280px",width:"120px"}} src="https://m.media-amazon.com/images/I/71gw6D5NE+L._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Dresses</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"90px",width:"195px",}} src="https://m.media-amazon.com/images/I/71NI4oqYMuL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Loafers</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{height:"280px",width:"90px"}} src="https://m.media-amazon.com/images/I/51lEd4lr0KL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Swimwear</div>
                </div>
                <div style={{textAlign:"center"}}>
                    <div className='home-img-div'><img style={{marginTop:"80px",height:"140px",width:"195px",}} src="https://m.media-amazon.com/images/I/71F2QuFXVIL._AC_SX255_.jpg" alt="" /></div>
                    <div className='home-mini-title'>Clogs</div>
                </div>
            </div>
        </div>

        <div ><img style={{width:"97%",margin:"50px 20px 50px 20px"}} src="https://m.media-amazon.com/images/G/01/Zappos/Afterpay_Banner_CTA_2880x500.png" alt="" /></div>
    
        <div className='home8'>
            <img src="https://m.media-amazon.com/images/G/01/2022/homepage5.23/SO-Promo.png" alt="" />
            <img src="https://m.media-amazon.com/images/G/01/2022/homepage2.08/Blank_500_x_500-491.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/G/01/zappos/landing/opus/2020/homepage/july/GGPromo.png" alt="" />
        </div>
    </div>
  )
}

export default Home