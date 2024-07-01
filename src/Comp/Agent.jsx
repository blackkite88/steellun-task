import React from 'react'
import Agentbox from './Agentbox'
import s1 from '../images/s1.png'
import s2 from '../images/s2.png'
import s3 from '../images/s3.png'

function Agent() {
  return (
    <div className='agent'>
      <div className="a-heading">
        <h1>Agents</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, recusandae!</p>
      </div>
      <div className="b-container">
        <Agentbox image={s1} name="Suii"/>
        <Agentbox image={s2} name="Ankara"/>
        <Agentbox image={s3} name="Suii"/>
      </div>
    </div>
  )
}

export default Agent
