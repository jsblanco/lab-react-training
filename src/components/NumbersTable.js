import React, { Component } from 'react'
import "./NumbersTable.css"

export default class extends Component {


    tableRender=()=>{for (let i=0; i<= this.props.limit; i++){
        if (i%2===0){
            return <p>{i}</p>
        } else {return <p style={{backgroundColor: `red`}}>{i}</p>}
        
    }}

    render() {

        let table=[]
        for (let i=1; i<=this.props.limit; i++){table.push(i)}

        return (
            <div className="numbers-table">
            <h2>Numbers box</h2>
                {table.map((number)=>{ if (number%2!==0){return <p className="numbers-box">{number}</p>} else {return <p className="numbers-box" style={{backgroundColor: `red`}}>{number}</p>}})}
            </div>
        )
    }
}
