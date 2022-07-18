import React from 'react'
import './Foter.css'
import logo from './FoterAsset/Logo.jpg'
import {ImFacebook} from 'react-icons/im'
import {FaTwitter, FaLinkedin} from 'react-icons/fa'
import {AiFillInstagram, AiFillYoutube} from 'react-icons/ai'


function Foter() {
  return (
    <div className='FoterCon'>
        <div className='FoterWrap'>
            <div className='FoterSocial'>
                <div className='FoterLogo'>
                    <img src={logo}/>
                </div>
                <div className='FoterText'>Take your crypto to the next level</div>
                <div className='Ricons'>
                <div className='FoterHandles1'>
                    <ImFacebook/>
                </div>
                <div className='FoterHandles'>
                    <FaTwitter/>
                </div>
                <div className='FoterHandles'>
                    <AiFillInstagram/>
                </div>
                <div className='FoterHandles'>
                    <FaLinkedin/>
                </div>
                <div className='FoterHandles'>
                    < AiFillYoutube/>
                </div>
               
                </div>
            </div>
            <div className='FoterDetails'>
              <div className='Fcompany'>
                <div>
                <div className='Com'>Company</div>
                <div className='About1'>About Us</div>
                <div className='About1'>Blog</div>
                <div className='About1'>Careers</div>
                <div className='About1'>Student</div>
                <div className='About1'>Security</div>
                <div className='About1'>Trust and safety</div>
                <div className='About1'>Newsroom</div>
                <div className='About1'>Videos</div>    
                </div>
              </div>

              <div className='Fcompany'>
                <div>
                <div className='Com'>Learn</div>
                <div className='About'>What's Trending</div>
                <div className='About1'>Product news</div>
                <div className='About1'>Events</div>
                <div className='About1'>University</div>
                <div className='About1'>Research</div>
                <div className='About1'>Market Updates</div>
                </div>
              </div>

              <div className='Fcompany'>
                <div>
                <div className='Com'>Product</div> 
                <div className='About'>Stock & Funds</div>
                <div className='About1'>Cash Card</div>
                <div className='About1'>Crypto</div>
                <div className='About1'>Options</div>
                <div className='About1'>Gold</div>
                <div className='About1'>Learn Snacks</div>
                </div>
              </div>
              
              <div className='Fcompany'>
                <div>
                <div className='Com'>Support</div>
                    <div className='About'>Support Center</div>
                <div className='About1'>Contact Us</div>
                <div className='About1'>System Status</div>
                <div className='About1'>Areas of Avalability</div>
              </div>
                </div>
              

              <div className='Fcompany'>
              <div>
                <div className='Com'>Resoures</div>
                <div className='About'>Prices</div>
                <div className='About1'>Site Widgets</div>
                <div className='About1'>Tax</div>
                <div className='About1'>Support</div>
               </div>
              </div>

            </div>
        </div>
    </div>
  )
}

export default Foter