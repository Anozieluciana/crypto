import React from 'react'
import './Most.css'
import Frame from './MostAssets/Frame.png'

const Most = () => {
  return (
    <div className='MostCon'>
        <div className='MostWrap'>
            <div className='MostDetails'>
                <div className='MostTitle'>The Most Trusted Cryptocurrency Platform</div>
                <div className='OneHold'>
                  <div className='Num1'>01</div>
                  <div className='Num1Hold'>
                    <div className='Sync'>Sync between platforms</div>
                    <div className='No'>No matter if you're using our web interface or mobile app-your data is always synced. just one account for all our services.</div>
                  </div>
                </div>
                <div className='Line'></div>
                <div className='TwoHold'>
                  <div className='Num2'>02</div>
                  <div className='Num2Hold'>
                    <div className='More'>More focus, less clutter</div>
                    <div className='No'>No ads just the crypto and content you love.</div>
                  </div>
                </div>
                <div className='Line'></div>
                <div className='ThreeHold'>
                  <div className='Num3'>03</div>
                  <div className='Num3Hold'>
                    <div className='Sync3'>Security by defaualt</div>
                    <div className='No3'>Enable privacy mode and app locking to protect your data.</div>
                  </div>
                </div>
            </div>
            <div className='MostImage'>
              <img src={Frame} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Most