import React from 'react'
import './index.css'
import pic from "./Assets/crypto.jpg"
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='Sign_Con'>
        <div className='Sign_wrap'>
           <div className='userPic'>
            <img src={pic }alt='cryto_jpg'/>
           </div>
           {/* <div> */}
            <div className='signin'>Join Us</div>
            <div className='description'>fill in your details to create a free crypto account</div>
           {/* </div> */}
           <div className='details'>
                <div className='input_Hold'>
                    <div className='email'>Name</div>
                    <input className='Input'/>
                </div>
                <div className='input_Hold'>
                    <div className='email'>Email</div>
                    <input className='Input'/>
                </div>
                <div className='input_Hold'>
                    <div className='email'>PassWord</div>
                    <input className='Input'/>
                </div>
                <div className='input_Hold'>
                    <div className='email'>Confirm PassWord</div>
                    <input className='Input'/>
                </div>
                <div className='input_Hold'>
                   <button className='Signin_but'>Sign Up</button>
                </div>
                <div className='Direc_Hold'>
                    <div className='direction'>Already have an account?  <Link to="/signin" className='link'>Sign In</Link></div>
                </div>
                
           </div>
        </div>
    </div>
  )
}

export  default index