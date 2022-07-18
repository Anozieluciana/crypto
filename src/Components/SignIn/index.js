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
            <div className='signin'>Welcome Back</div>
            <div className='description'>fill in your details to sign into your account</div>
           {/* </div> */}
           <div className='details'>
                <div className='input_Hold'>
                    <div className='email'>Email</div>
                    <input className='Input'/>
                </div>
                <div className='input_Hold'>
                    <div className='email'>PassWord</div>
                    <input className='Input'/>
                </div>
                <div className='input_Hold'>
                   <button className='Signin_but'>Sign In</button>
                </div>
                <div className='Direc_Hold'>
                    <div className='direction'>dont have an account?  <Link to="/signup" className='link'>SignUp</Link></div>
                </div>
                
           </div>
        </div>
    </div>
  )
}

export  default index