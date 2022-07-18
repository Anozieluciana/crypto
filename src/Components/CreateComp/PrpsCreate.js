import React from 'react'
import Create from './Create'
import pic from './CreateAssets/Left.png'
import pic1 from './CreateAssets/iphone2.png'
import pic2 from './CreateAssets/iphone3.png'
import Light from './Light'

function PrpsCreate() {
  return (
    <div >
        <Create today="Create portfolio today" text="Buy and sell popular digital currencies, keep track of them in the one place. Has a variety of features that make it the best place to start trading" pic={pic}/>

        <Light/>

        <Create today="Security From Day One" text="Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in one place." pic={pic2} />
    </div>
  )
}

export default PrpsCreate