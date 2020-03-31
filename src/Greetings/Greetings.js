/* eslint-disable default-case */
import React from "react";
import "./Greetings.css";
import { render } from "react-dom";

const Greetings = props => {
  let language;
  switch (props.lang) {
    case "de":
      language = "Hallo ";
      break;
    case "en":
      language = "Hello ";
      break;
    case "es":
      language = "Hola ";
      break;
    case "fr":
      language = "Bonjour ";
      break;
  }

  return (
    <div className="Greetings">
      <p>
        {language}, {props.children}!
      </p>
    </div>
  );
};

export default Greetings;
