const Button = (props) => {
  return (
    <button
    onClick={props.onClick}
    name={props.name}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        border: props.border? props.borer : 'none',
        borderRadius: "7px",
        cursor: "pointer",
        fontSize: props.fontSize,
        width: props.width,
        height: props.height? props.height : '20px',
        margin : props.margin,
        display : props.display,
        textDecoration : props.textDecoration? props.textDecoration:'none',
      }}
    >
      {props.value}
    </button>
  );
};

export default Button;
