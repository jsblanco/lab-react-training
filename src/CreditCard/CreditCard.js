/* eslint-disable default-case */
import React from "react";
import "./CreditCard.css";

const CreditCard = props => {
  let cardNumber = "···· ···· ···· " + props.number.slice(-4);
  let cardType;
  switch (props.type) {
    case "Visa":
      cardType = "/img/visa.png";
      break;
    case "Master Card":
      cardType = "/img/master-card.svg";
      break;
  }

  return (
    <div
      className="creditCard"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <img src={`${cardType}`} alt="" />
      <p className="cardNumber">{cardNumber}</p>
      <p className="cardText">
        Expires {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p className="cardText">{props.owner}</p>
    </div>
  );
};

export default CreditCard;
/*
<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" />
*/
