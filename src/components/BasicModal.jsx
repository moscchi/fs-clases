import { useState } from "react";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "80%",
    color: "black",
    padding: 0,
  },
};

const BasicModal = ({ isOpen, setIsOpen, title }) => {
  const [validForm, setValidForm] = useState(false);
  const [formValues, setFormValues] = useState({ ageStart: 0, ageEnd: 0 });
  const [formLabelValidation, setFormLabelValidation] = useState({
    ageStartLabelValidation: "",
    ageEndLabelValidation: "",
  });
  const closeModal = () => setIsOpen(false);

  const validateForm = () => {
    // formValues.ageStart y ageEnd sean mayor a 0
    // formValues.ageStart sea menor que ageEnd
    /* if (
      formValues.ageStart > 0 &&
      formValues.ageEnd > 0 &&
      formValues.ageStart < formValues.ageEnd
    )
      setValidForm(true); */
    if (formValues.ageStart <= 0)
      setFormLabelValidation((prevState) => ({
        ...prevState,
        ageStartLabelValidation: "La edad desde debe ser un numero mayor a 0.",
      }));
    if (formValues.ageEnd <= 0)
      setFormLabelValidation((prevState) => ({
        ...prevState,
        ageEndLabelValidation: "La edad hasta debe ser un numero mayor a 0.",
      }));
    if (formValues.ageStart >= formValues.ageEnd) {
      setFormLabelValidation((prevState) => ({
        ...prevState,
        ageStartLabelValidation:
          "La edad desde debe ser menor a la edad hasta.",
      }));
    } else if (formValues.ageStart > 0) {
      setValidForm(true);
      setFormLabelValidation({
        ageStartLabelValidation: "",
        ageEndLabelValidation: "",
      });
    }
  };

  const handleUpdateFormValues = (value, type) => {
    type === "start"
      ? setFormValues((prevState) => ({ ...prevState, ageStart: value }))
      : setFormValues((prevState) => ({ ...prevState, ageEnd: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();

    alert(validForm ? "Enviando formulario" : "Error al enviar el formulario");
  };
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div>
        <div className="modal-header">
          <h1>{title}</h1>
          <button onClick={closeModal}>X</button>
        </div>
        <form className="modal-form" method="Post" onSubmit={handleSubmit}>
          <div style={{width: '100%'}}>
          <input
            type="number"
            placeholder="Edad desde"
            onChange={(event) =>
              handleUpdateFormValues(event.target.value, "start")
            }
          />
          <p style={{ color: "red" }}>
            {formLabelValidation.ageStartLabelValidation}
          </p>
          <input
            type="number"
            placeholder="Edad hasta"
            onChange={(event) =>
              handleUpdateFormValues(event.target.value, "end")
            }
          />
          <p style={{ color: "red" }}>
            {formLabelValidation.ageEndLabelValidation}
          </p>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </ReactModal>
  );
};

export default BasicModal;
