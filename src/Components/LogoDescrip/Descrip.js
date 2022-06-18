import React from 'react'
import './Descrip.css'
import binance from './DescripAssets/binance.png'
import coinbasel from './DescripAssets/coinbasel.png'
import bitcoin from './DescripAssets/bitcoin.png'
import tether from './DescripAssets/tether.png'
import bixmex from './DescripAssets/bitmex.png'

 const Descrip = () => {
  return (
    <>
        <div className='DescripCon'>
            <div className='DescripWrap'>
                <div className='DescripPic'></div>
                <div className='DescripHold'>
                    <div className='DescripLogo'>
                        <img src={binance} alt=''/>
                        <img src={coinbasel} alt=''/>
                        <img src={bitcoin} alt=''/>
                        <img src={tether} alt=''/>
                        <img src={bixmex} alt=''/>
                    </div>
                    <div className='DescripCount'>
                        <div className='ninetyHold'>
                            <div className='ninetyK'>90k</div>
                            <div className='ninetyKText'>People have joined</div>
                        </div>
                        <div className='FiftyHold'>
                            <div className='FiftyK'>50k</div>
                            <div className='FiftyKText'>VVIP users have joined</div>
                        </div>
                        <div className='HundredHold'>
                            <div className='HundredK'>100+</div>
                            <div className='HundredKText'>Big companies have joined</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Descrip