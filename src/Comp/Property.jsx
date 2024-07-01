import React from 'react'
import Bproperty from './Bproperty'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'

function Property() {
  return (
    <div className='product'>
      <div className="p-heading">
        <h1>Properties</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, libero.</p>
      </div>
      <div className="product-container">
        <Bproperty image={p1} name="CR7" price="$7777777"/>
        <Bproperty image={p2} name="CR7" price="$7777777"/>
        <Bproperty image={p3} name="CR7" price="$7777777"/>
      </div>
    </div>
  )
}

export default Property
