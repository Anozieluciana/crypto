import React from 'react'
import Header from '../Components/HeaderComp/Header'
import Hero from './HeroComp/Hero'
import Descrip from './LogoDescrip/Descrip'
import Most from './MostComp/Most'
import PropCreate from './CreateComp/PrpsCreate'
// import DropDown from './DropDown/DropDown'
import SlideMainHold from './SliderComp/SlideMainCon'
import Get from './GetComp/Get'
import Join from './JoinComp/Join'
import Foter from './FoterComp/Foter'
import Last from './LastComp/Last'

 const ResideComp = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <Descrip/>
        <Most/>
        <PropCreate/>
        <Get/>
        <SlideMainHold/>
      <Join/>
      <Foter/>
      <Last/>
    </>
  )
}

export default ResideComp