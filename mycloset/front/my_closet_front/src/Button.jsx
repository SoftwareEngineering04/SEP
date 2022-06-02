import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        color: "white",
        border: 0,
        borderRadius: "7px",
        cursor: "pointer",
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
      }}
    >
      {props.value}
    </button>
  );
};

export default Button;
