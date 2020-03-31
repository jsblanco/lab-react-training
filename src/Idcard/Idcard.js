import React from 'react'
import "./Idcard.css"

const Idcard = (props) => {
return (
    <div className="result">
        <p><b>Name: </b> {props.firstName} {props.lastName}</p>
        <p><i>{props.gender}</i></p>
        <p><b>Height: </b>{props.height}</p>
        <p><b>Date of birth: </b>{props.birth.getDate()}-{props.birth.getMonth()}-{props.birth.getFullYear()}</p>
        <img src={props.picture} alt={`Picture of ${props.firstName} ${props.lastName}`}/>
    </div>)
}

export default Idcard;