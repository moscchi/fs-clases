const CardStudent = (props) => {
    console.log(props)
  return (
    <div className="card-student">
      <p>{props.studentName} {props.studentLastName}</p>
    </div>
  );
};

export default CardStudent;
