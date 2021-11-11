import React from "react";
import "./SuccessModal.scss";

const SuccessModal: React.FC<{
  setShowModal: React.Dispatch<boolean>;
  name: string;
}> = ({ setShowModal, name }) => {
  return (
    <div className="modal flexCenter" id="SuccessModal">
      <div className="modalContent">
        <div className="modalHeader">
          <h1 className="modalTitle">Thank you {name}</h1>
        </div>
        <div className="modalBody">
          <p>I will answer you soon</p>
        </div>
        <div className="modalFooter">
          <button className="modalClose" onClick={() => setShowModal(false)}>
            {/* add close icon */}X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
