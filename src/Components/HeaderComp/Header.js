import React,{useState} from 'react'
import './Header.css'
import pic from './HeaderAssets/Logo.jpg'
import {AiOutlineMenuFold,AiOutlineMenuUnfold} from 'react-icons/ai'
import {Link} from "react-router-dom"

 const Header = () => {

  const [activate, setActivate] = useState(false)
 
  const handleClick = () => setActivate(!activate)
  const closemenu = () => setActivate(false)

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
        </div>
        <div className='HeaderSigning'>
           <Link to="/signin" className='Sign' >Sign in</Link>
            <div className='HeaderGet'>Get Started</div>
        </div>
        <div className='ToggleHold' onClick={handleClick}>
        { activate ? (<AiOutlineMenuFold size="25px"/>) : (<AiOutlineMenuUnfold  size="25px"/>)}
        </div>


        <div className={`DropMenu ${activate ? "Show":""}`}>
          <div className='NavHold'>
            <div>Product</div>
            <div>Price</div>
            <div>Learn</div>
            <div>Support</div>
            <Link to="/signin" className='Sign1'>Sign in</Link>
            <div className='HeaderGet'>Get Started</div>
          </div>
        </div>
      
         
      </div>
    </div>
  )
}

export default Header


