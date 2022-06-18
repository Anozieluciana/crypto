import ReactHeroInputHold from 'react'
import './Hero.css'

 const Hero = () => {
  return (
    <>
        <div className='HeroCon'>
            <div className='HeroWrap'>
                <div className='One'><span>One platform</span><br/>all things crypto</div>
                <div className='HeroSmall'>Open a free account in minutes right from your phone and make<br/> your money go further</div>
                <div className='HeroInputHold'>
                <input placeholder='Email address'/>
                <div className='HeroBut'>Get started</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero