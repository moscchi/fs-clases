import { useState } from "react";
import "./App.css";
import CardStudent from "./CardStudent";

const studentsList = [
  {id: 1, name: 'Jesus', lastName: 'Perez'},
  {id: 2, name: 'Leon', lastName: 'Perez'},
  {id: 3, name: 'Facundo', lastName: 'Perez'},
  {id: 4, name: 'Guillermo', lastName: 'Perez'},
]

function App() {
  
  return (
    <>
     {studentsList.map(student => {
      return (
        <div key={student.id}>
          <CardStudent studentName={student.name} studentLastName={student.lastName}/>
        </div>
      )
     })}
    </>
  );
}

export default App;
