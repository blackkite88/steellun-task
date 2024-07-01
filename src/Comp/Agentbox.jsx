import React from 'react'

function Agentbox(props) {
  return (
    <div className='a-box'>
      <div className="a-b-img">
        <img src={props.image} alt="" />
      </div>
      <div className="a-b-text">
        <h1>{props.name}</h1>
        <a href="" className='agent-btn'>Learn More</a>
      </div>
    </div>
  )
}

export default Agentbox
