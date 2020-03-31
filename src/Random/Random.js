import React from "react";

const Random = props =>{
    let {min, max} = props
    let interval = max-min
    let randomNumber = (Math.floor(Math.random()*interval))+min

    return(
        <div className="result, ">
            <p>Random value between {props.min} and {props.max}:  <b>{randomNumber}</b></p>
        </div>
    )
}

export default Random;