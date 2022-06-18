import React from 'react'
import './Create.css'
import {IoSend} from 'react-icons/io5'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'


 const Create = (props) => {
  return (
    <div className='CreateCon'>
        <div className='CraeteWrap'>
            <div className='CreateFrame'>
                  <img src={props.pic} className='CreateIphone' alt='i'/>
  
            </div>
            <div className='CreateHold'>
                <div className='CreateToday'>{props.today}</div>
                <div className='CreateBuy'>{props.text}</div>
            </div>
        </div>
    </div>
  )
}

export default Create