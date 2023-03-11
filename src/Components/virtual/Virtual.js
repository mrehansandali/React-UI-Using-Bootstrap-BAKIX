import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Virtual.css"

function Virtual() {
    
    let oculus = useNavigate()
    function renderOculus () {
        oculus("/oculus")
    }
    let laptop = useNavigate()
    function renderLaptop () {
        laptop("/laptop")
    }



    return (
        <div>
            <div className="buttons">
                <button type='button' onClick={renderOculus}></button>
                <button type='button' onClick={renderLaptop}></button>
                <button type='button' onClick={renderOculus}></button>
            </div>


        </div>
    )
}

export default Virtual