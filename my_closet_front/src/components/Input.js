import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input 
    maxLength={'8'}
    onChange = {props.onChange}
    ref={ref}
    type={props.type}
    placeholder={props.placeholder ? props.placeholder : '이름은 최대 8글자'}
    disabled={props.disabled}
    value={props.value}
    readOnly={props.readOnly}
    style={{
      backgroundImage: props.backgroundImage,
      backgroundColor : "white",
      color : props.color ? props.color : "gray",
      border : "1px solid gray",
      borderRadius : "3px",
      fontSize : props.fontSize,
      width : props.width,
      height : props.height? props.height : '20px',
      display : props.display,
      margin : props.margin
  }} />
  );
})

export default Input;