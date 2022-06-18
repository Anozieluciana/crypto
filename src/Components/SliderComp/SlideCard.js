import React from 'react'
import './SlideCard.css'
import data from './data.json'
import pic from './joe.jpg'

function SlideCard(props) {
  return (
    <>
    {data?.map((props)=>{
      return(
        <div className='SliderBox'  key={props.id}>
        <div className='SlideHold'>
          <div className='SlideCardPic'>
            <img src={pic} alt='image'/>
          </div>
          <div className='SliHold'>
            <div className='SlideCardName'>john Doe</div>      
            <div className='SlideCard2Name'>ceo motion design agency</div>
          </div>
        </div>
        <div className='SlideCardTest'>
          {props.content}
        </div>
      </div>
      )
    })}
    
    </>

  )
}

export default SlideCard