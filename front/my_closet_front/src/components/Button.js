const Button = (props) => {
  return (
    <button
    onClick={props.onClick}
    name={props.name}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
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
