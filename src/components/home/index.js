import React from 'react'
import './home.css'
import IconUrl from '../../assets/KalyanReddyProfile.jpeg'

const Home = () => {
  return (
    <div className='home'>
      <div class="container-home">
        <div class="left-home">
          <h1>Hi There,</h1>
          <h2>I am  Kalyan Kumar Reddy</h2>
          <h2>Senior Software Engineer at Omniwyse Technologies </h2>
        </div>
        <div class="right-home">
          <img className='icon' src={IconUrl}></img>
        </div>
      </div>
    </div>
  )
}

export default Home