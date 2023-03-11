import React from 'react'
import "./Laptop.css"
import laptop from "../../../img/vr-3.png"
import Virtual from '../Virtual'

function Laptop() {
  return (
    <div>
      <div className="buttons">

      <Virtual/>

    <div className="maintain">
      <div className="main">

        <div className="mrtext">
          <p>Dreams Come True</p>
          <h1>PLEN:bit : Sensor Control Laptop</h1>
          <div className="line"></div>
          <div className="mrnumbers">
            <div className="pledged"><h3>$32,678</h3><p>Pledged</p></div>
            <div className="target"><h3>$33,467</h3><p>Target</p></div>
          </div>
        </div>
        <div className="pic">
          <img src={laptop} alt="" />
        </div>


      </div>
      </div>

      </div>
    </div>
  )
}

export default Laptop