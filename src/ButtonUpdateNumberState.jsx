const ButtonUpdateNumberState = (props) => {
  // props = { number, setNumber, typeButton }
  const updateNumber = (numberParam) => {
    if(props.typeButton === 'increment') props.setNumber(numberParam + 1)
    if(props.typeButton === 'decrement') props.setNumber(numberParam - 1)
  };

  return (
    <button onClick={() => updateNumber(props.number)}>
      { props.typeButton === 'increment' ? 'Incrementar':'Decrementar'} el número: {props.number}
    </button>
  );
};

export default ButtonUpdateNumberState;
