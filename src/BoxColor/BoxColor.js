import React from "react"
import Random from "../Random/Random"
import "./BoxColor.css"


const BoxColor = props => {

    function colourToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
 let colourHex = "#" + colourToHex(props.r) + colourToHex(props.g) + colourToHex(props.b);
      

    return (
        <div className="result box-color" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
           <p> rgb({props.r},{props.g},{props.b})</p>
           <p>{colourHex}</p>
        </div>
    )
}

export default BoxColor;


/*


      <BoxColor r={255} g={0} b={0} />

      */