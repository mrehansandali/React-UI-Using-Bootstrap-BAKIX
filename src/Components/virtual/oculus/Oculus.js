import React from 'react'
import oculus from "../../../img/vr.png"
import Virtual from '../Virtual'
import "./Oculus.css"

function Oculus() {
    return (
        <div>

            <div className="buttons">
                <Virtual />
            
            <div className="maintain">
                <div className="main">

                    <div className="mrtext">
                        <p>Dreams Come True</p>
                        <h1>360° Virtual Reality Console</h1>
                        <div className="ocline"></div>
                        <div className="mrnumbers">
                            <div className="pledged"><h3>$45,398</h3><p>Pledged</p></div>
                            <div className="target"><h3>$21,765</h3><p>Target</p></div>
                        </div>
                    </div>
                    <div className="pic">
                        <img src={oculus} alt="" />
                    </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Oculus