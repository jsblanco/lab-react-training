import React from "react"
import Rating from "../Rating/Rating"
import "./DriverCard.css"

const DriverCard = (props) => {

    
    
    
    return (
        <div className="DriverCard">
        <img src={`${props.img}`} alt=""/>
<div>
    <p><b>{props.name}</b></p>
    <Rating>{props.rating}</Rating>
    <p className="driver-details">{props.car.model} - {props.car.licensePlate}</p>

</div>

        </div>
    )
}

export default DriverCard

/*
<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }} />

  */