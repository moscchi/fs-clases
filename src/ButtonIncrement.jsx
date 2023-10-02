const ButtonIncrement = (props) => {
  const incrementNumber = (numberParam) => {
    props.setNumber(numberParam + 1);
  };

  return (
    <button onClick={() => incrementNumber(props.number)}>
      Boton estatico Incrementar el numero: {props.number}
    </button>
  );
};

export default ButtonIncrement;
