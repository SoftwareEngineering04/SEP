import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input 
    ref={ref}
    type={props.type}
    placeholder={props.placeholder}
    disabled={props.disabled}
    value={props.value}
    style={{
      backgroundColor : "white",
      color : "gray",
      border : "1px solid gray",
      borderRadius : "3px",
      fontSize : props.fontSize,
      width : props.width,
      height : props.height,
      display : props.display
  }} />
  );
})

export default Input;