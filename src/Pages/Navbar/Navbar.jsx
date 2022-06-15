import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const cartdata = useSelector((state)=>state.cartdata)
    const navigate = useNavigate()
    const [flag1,setflag1] = useState(false)
    const [flag2,setflag2] = useState(false)
    const [flag3,setflag3] = useState(false)
    const [flag4,setflag4] = useState(false)
    const [flag5,setflag5] = useState(false)
    const [flag6,setflag6] = useState(false)
    const [flag7,setflag7] = useState(false)
    const [flag8,setflag8] = useState(false)

    const handleClickDropdown = (count,flag)=>{
        if(count===1){
            setflag1(flag) ; setflag2(false) ; setflag3(false) ; setflag4(false) ; setflag5(false) ; setflag6(false);setflag7(false);setflag8(false)
        }
        else if(count===2){
            setflag1(false) ; setflag2(flag) ; setflag3(false) ; setflag4(false) ; setflag5(false) ; setflag6(false);setflag7(false);setflag8(false)
        }
        else if(count===3){
            setflag1(false) ; setflag2(false) ; setflag3(flag) ; setflag4(false) ; setflag5(false) ; setflag6(false);setflag7(false);setflag8(false)
        }
        else if(count===4){
            setflag1(false) ; setflag2(false) ; setflag3(false) ; setflag4(flag) ; setflag5(false) ; setflag6(false);setflag7(false);setflag8(false)
        }
        else if(count===5){
            setflag1(false) ; setflag2(false) ; setflag3(false) ; setflag4(false) ; setflag5(flag) ; setflag6(false);setflag7(false);setflag8(false)
        }
        else if(count===6){
            setflag1(false) ; setflag2(false) ; setflag3(false) ; setflag4(false) ; setflag5(false) ; setflag6(flag);setflag7(false);setflag8(false)
        }
        else if(count===7){
            setflag1(false) ; setflag2(false) ; setflag3(false) ; setflag4(false) ; setflag5(false) ; setflag6(false);setflag7(flag);setflag8(false)
        }
        else{
            setflag1(false) ; setflag2(false) ; setflag3(false) ; setflag4(false) ; setflag5(false) ; setflag6(false);setflag7(false);setflag8(flag)
        }
    }
  return (
    <div>
        <div className='navbar1'>
            <div className='img1'><img src="https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg" alt="" /></div>
            <div className='img2'><img src="https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg" alt="" /></div>
        </div>

        <div className='navbar2'>
            <div className='innerdiv1'>Customer Service <ArrowDropDownIcon/></div>
            <div className='innerdiv2'>
            Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day Return Policy! More About Shipping & Returns
            </div>
        </div>

        <div className='navbar3'>
            <div className='navbar3-inner1'>
                <div><img style={{height:"60px",width:"120px",marginLeft:"30px",marginTop:"20px"}} src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" alt="" /></div>
                <div><input type="text" name="" id="" placeholder='🔍  Search for shoes,clothes,etc' /><button>SEARCH</button></div>
            </div>
            <div>
                <button onClick={()=>navigate("/cart")} className='cart-button'><ShoppingCartOutlinedIcon/> ITEM IN CART</button>
            </div>
        </div>


        <div className='navbar4'>

        <div className='navbar4-main'>

            <div>
                <div className='heading1' onClick={()=>handleClickDropdown(1,!flag1)}>New<ArrowDropDownIcon color='action'/></div>
                <div className={flag1 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-UGG-SPECIAL-OLYMPICS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/SWIMWEAR-NEW-ARRIVALS-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <div className='heading' onClick={()=>handleClickDropdown(2,!flag2)}>Women<ArrowDropDownIcon color='action'/></div>
                <div className={flag2 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-CROCS-WOMENS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/STREETTRAY-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <div className='heading' onClick={()=>handleClickDropdown(3,!flag3)}>Men<ArrowDropDownIcon color='action'/></div>
                <div className={flag3 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-UGG-SPECIAL-OLYMPICS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/SWIMWEAR-NEW-ARRIVALS-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <div className='heading' onClick={()=>handleClickDropdown(4,!flag4)}>Kids<ArrowDropDownIcon color='action'/></div>
                <div className={flag4 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-UGG-SPECIAL-OLYMPICS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/SWIMWEAR-NEW-ARRIVALS-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <div className='heading' onClick={()=>handleClickDropdown(5,!flag5)}>Department<ArrowDropDownIcon color='action'/></div>
                <div className={flag5 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-UGG-SPECIAL-OLYMPICS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/SWIMWEAR-NEW-ARRIVALS-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <div className='heading' onClick={()=>handleClickDropdown(6,!flag6)}>Brands<ArrowDropDownIcon color='action'/></div>
                <div className={flag6 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-UGG-SPECIAL-OLYMPICS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/SWIMWEAR-NEW-ARRIVALS-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <div className='heading' onClick={()=>handleClickDropdown(7,!flag7)}>Sale<ArrowDropDownIcon color='action'/></div>
                <div className={flag7 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-UGG-SPECIAL-OLYMPICS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/SWIMWEAR-NEW-ARRIVALS-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>


            <div>
                <div className='heading' onClick={()=>handleClickDropdown(8,!flag8)}>🔥 Clothing<ArrowDropDownIcon color='action'/></div>
                <div className={flag8 ? "sub-div2" : "sub-div1"}>
                    <div className='inner1'>
                        <div><h4>The Find</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>The Ultimate Sneaker Guide</div>
                            <div className='sublist'>The Sandals Guide</div>
                            <div className='sublist'>Fresh Spring/Summer Denim</div>
                            <div className='sublist'>Energizing Sporty Looks</div>
                            <div className='sublist'>Western-Inspired Wear</div>
                            <div className='sublist'>L.L. Bean Hiking Musts</div>
                            <div className='sublist'>Outdoor Style + Merrell</div>
                            <div className='sublist'>Garden Charm Trend</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>The Style Room</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Super Puff with Coach</div>
                            <div className='sublist'>Nurture Nature with Free People</div>
                            <div className='sublist'>Summer Glam</div>
                            <div className='sublist'>New Season, New Possibilities</div>
                            <div className='sublist'>Dopamine Dressing</div>
                            <div className='sublist'>Men’s Summer Staples</div>
                            <div className='sublist'>Men’s Joyful Color</div>
                            <div className='sublist'>Men’s Outdoor Utility</div>
                        </div>
                    </div>
                    <div className='inner2'>
                        <div><h4>New Brands</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>SAOLA</div>
                            <div className='sublist'>VISCATA</div>
                            <div className='sublist'>Philippe Model</div>
                            <div className='sublist'>FREYA</div>
                            <div className='sublist'>UGG® Universal</div>
                            <div className='sublist'>Tommy John</div>
                            <div className='sublist'>Draper James</div>
                            <div className='sublist'>MANGO</div>
                            <div className='sublist'>SOREL Universal</div>
                        </div>
                    </div>
                    <div className='inner1'>
                        <div><h4>New Arrivals</h4></div>
                        <div className='dropdown-list'>
                            <div className='sublist'>Sandals</div>
                            <div className='sublist'>Toys & Games</div>
                            <div className='sublist'>Drinkware</div>
                            <div className='sublist'>Sporting Goods</div>
                            <div className='sublist'>Home Decor</div>
                            <div className='sublist'>Special Olympics Exclusives</div>
                        </div>
                    </div>
                    <div className='inner3'>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/COOP-UGG-SPECIAL-OLYMPICS-GLOBAL-VAN-350x350.jpg" alt="" />
                            <div className='img-div'>Shop UGG for special Olympics</div>
                        </div>
                        <div>
                            <img className='dropdown-img' src="https://m.media-amazon.com/images/G/01/2022/Global-Nav/June/SWIMWEAR-NEW-ARRIVALS-GLOBAL-NAV.jpg" alt="" />
                            <div className='img-div'>Shop New Womens Swim</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className='signin'>SignIn/Register</div>
            
        </div>

    </div>
  )
}

export default Navbar