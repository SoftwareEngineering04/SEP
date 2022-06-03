const Input = (props) => {
  return (
    <input 
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
      style={{
        backgroundColor : "white",
        color : "gray",
        border : "1px solid gray",
        borderRadius : "3px",
        fontSize : props.fontSize,
        width : props.width,
        height : props.height
      }} />
  );
}

export default Input;