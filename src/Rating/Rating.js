/* eslint-disable default-case */
import React from "react"
import "./Rating.css"

const Rating = props => { 
    let stars= Math.round(props.children)
    let finalRating= ""

    for (let i=0; i<5; i++ ){
        if (stars>i){
            finalRating+="★"
        } else {
            finalRating+="☆"
        }
    }
   
    return(
    <div>
        <p>{finalRating}</p>
    </div>
)}

export default Rating