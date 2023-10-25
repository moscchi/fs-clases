import ReactModal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "50%",
    color: "black",
    padding: 0,
  },
};

const InformativeModal = ({ isOpen, setIsOpen, title, description }) => {
 
  const closeModal = () => setIsOpen(false);

  
  return (
    <ReactModal isOpen={isOpen} style={customStyles}>
      <div>
        <div className="modal-header">
          <h1>{title}</h1>
          <button onClick={closeModal}>X</button>
        </div>
        <p>{description}</p>
      </div>
    </ReactModal>
  );
};

export default InformativeModal;
