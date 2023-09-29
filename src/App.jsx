import { useState } from "react";
import "./App.css";

const initialElements = [
  { id: 1, valor: "el primero", chequeado: false },
  { id: 2, valor: "el segundo", chequeado: false },
  { id: 3, valor: "el tercero", chequeado: false },
  { id: 4, valor: "el cuarto", chequeado: false },
  { id: 5, valor: "el quinto", chequeado: false },
  { id: 6, valor: "el sexto", chequeado: false },
  { id: 7, valor: "el septimo", chequeado: false },
  { id: 8, valor: "el octavo", chequeado: false },
  { id: 9, valor: "el noveno", chequeado: false },
];

function App() {
  const [checkboxObjetoList, setCheckboxObjetoList] = useState(initialElements);

  const handleCheckboxSelect = (id) => {
    //buscamos el indice
    const indexCheckboxObjetoList = checkboxObjetoList.findIndex(
      (checkboxObjeto) => checkboxObjeto.id === id
    );
    //Validamos que el indice exista. Sino, mensaje al usuario.
    if (indexCheckboxObjetoList === -1) return alert("Hubo un error!!");

    //Nos copiamos el objeto, y modificamos su copia.
    const copyOfCheckboxObjetoList = structuredClone(checkboxObjetoList);
    //Si chequeado de array[indice] era true, pasaria a ser false. Y al reves.
    copyOfCheckboxObjetoList[indexCheckboxObjetoList].chequeado =
      !checkboxObjetoList[indexCheckboxObjetoList].chequeado;
    //Actualizamos el estado de checkboxObjetoList
    setCheckboxObjetoList(copyOfCheckboxObjetoList);
  };
  return (
    <>
      {checkboxObjetoList.map((checkboxObjeto) => {
        return (
          <div key={checkboxObjeto.id}>
            <input
              type="checkbox"
              value={checkboxObjeto.valor}
              onChange={() => handleCheckboxSelect(checkboxObjeto.id)}
            />
            <label>{checkboxObjeto.chequeado ? "Ocultar" : "Mostrar"}</label>
            <p>{checkboxObjeto.chequeado ? checkboxObjeto.valor : "Oculto"}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
