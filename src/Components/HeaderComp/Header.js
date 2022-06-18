import React,{useState} from 'react'
import './Header.css'
import pic from './HeaderAssets/Logo.jpg'
import {AiOutlineMenuFold,AiOutlineMenuUnfold} from 'react-icons/ai'

 const Header = () => {
 

  return (
    <div className='HeaderCon'>
      <div className='HeaderWrap'>
        <div className='HeaderLogo'>
          <img src={pic} alt=''/>
        </div>
        <div className='HeaderNav'>
            <div className='Product'>Product</div>
            <div className='Product'>Price</div>
            <div className='Product'>Learn</div>
            <div className='Product'>Support</div>
            <div className='SignNav'>Support</div>
            <div className='ButNav'>Support</div>
        </div>
        <div className='HeaderSigning'>
            <div className='Sign'>Sign in</div>
            <div className='HeaderGet'>Get Started</div>
        </div>
        <div>
        </div>
          <div className="Menu">
            <AiOutlineMenuUnfold className='Ic2' id='menu' onClick={()=>{
            document.getElementById("sidebar").style.width = "200px"
            document.getElementById("menu").style.display = "none"
            document.getElementById("close").style.display = "block"
          }}/>

          <AiOutlineMenuFold className='Ic' id="close" onClick={() =>{
            document.getElementById("sidebar").style.width = "0"
            document.getElementById("menu").style.display = "block"
            document.getElementById("close").style.display = "none"
            document.getElementById("close").style.transition = "all 300ms"
          }}/>
          </div>
          <div className='Sidebar' id='sidebar'>
          <div className='Product1'>Product</div>
            <div className='Product1'>Price</div>
            <div className='Product1'>Learn</div>
            <div className='Product1'>Support</div>
            <div className='SignNav1'>Support</div>
            <div className='Sign1'>Sign in</div>
            <div className='HeaderGet1'>Get Started</div>
             </div>
      </div>
    </div>
  )
}

export default Header


