import React from 'react'
import './Join.css'
import luna from './JoinAsset/luna.png'
import eth from './JoinAsset/eth.png'
import btc from './JoinAsset/btc.png'

function Join() {
  return (
    <div className='JoinCon'>
        <div className='JoinWrap'>
            <div className='JoinHold'>
                <div className='Join'>Join a new generation of investors</div>
                <div className='JoinBut'>Get Started</div>
            </div>
            <div className='JoinLogo'>
            <div className='BHold'>
              <img src={btc}/>
              </div>
            <div className='LHold'>
              <img src={luna}/>
              </div>
             
              <div className='EHold'>
              <img src={eth}/>
              </div>
              
             
            </div>
        </div>
    </div>
  )
}

export default Join