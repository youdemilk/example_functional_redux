import React from "react";
import "./styles.css";

const CustomButton = (props) => {
  return (
    <button
      style={props.buttonStyle}
      className={"button"}
      onClick={props.onClickButton}
    >
      <h1>{props.buttonText}</h1>
    </button>
  );
};

export default CustomButton;
