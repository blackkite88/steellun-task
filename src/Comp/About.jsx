import React from 'react'
import img1 from '../images/header-bg.png'

function About() {
  return (
    <div className='about'>
      <div className="about-model">
        <img src={img1} alt="" />
      </div>
      <div className="about-text">
        <h2>We Are The Best Real Estate Company</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut dignissimos enim, dolore distinctio, atque id fugit laboriosam nostrum nam accusantium eum saepe officiis sed quasi minus autem dolorem suscipit.</p>
        <button>View More Details</button>
      </div>
    </div>
  )
}

export default About
