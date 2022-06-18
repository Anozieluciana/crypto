import React from 'react'
import './Get.css'
import pic1 from './GetAsset/1.png'
import pic2 from './GetAsset/2.png'
import pic3 from './GetAsset/3.png'

function Get() {
  return (
    <div className='GetCon'>
        <div className='GetBoldTxt'>Get Started in Just Few Minutes</div>
        <div className='GetMinText'>Has a variety of features that will make it the best place to start your trade</div>
        <div className='GettHold'>
        <div className='GetWrap'>
          <div className='GettCard'>
            <div className='GettPic'>
              <img src={pic1} alt=''/>
            </div>
            <div className='GetSign'>Sign Up</div>
            <div className='GettBuy'>Buy Bitcoin or Enthereum, the security stores it in your wallet or send it on easy to friends</div>
            </div>
          <div className='GettCard'>
            <div className='GettPic'>
              <img src={pic2} alt=''/>
            </div>
            <div className='GetSign'>Fund</div>
            <div className='GettBuy'>Choose your prefered  payment method such as bank transfer or credit card to top up your wallet</div>
            </div>
          <div className='GettCard'>
            <div className='GettPic'>
              <img src={pic3} alt=''/>
            </div>
            <div className='GetSign'>Buy Crypto</div>
            <div className='GettBuy'>Sign up for free wallet on web, ios or Android and follow our easy process to set up your profile</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Get