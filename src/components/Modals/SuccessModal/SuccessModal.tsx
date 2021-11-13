import React, { useEffect, useState } from "react";
import "./SuccessModal.scss";

const SuccessModal: React.FC<{
  setShowModal: React.Dispatch<boolean>;
  name: string;
}> = ({ setShowModal, name }) => {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    setModalActive(true);
    return () => {
      setModalActive(false);
    };
  }, [setModalActive]);

  return (
    <div
      className={
        modalActive ? "modal flexCenter modalActive" : "modal flexCenter"
      }
      id="SuccessModal"
      aria-modal
    >
      <div className="modalContent">
        <div className="modalHeader">
          <h1 className="modalTitle">Thank you {name}</h1>
        </div>
        <div className="modalBody">
          <p>I will answer you soon</p>
        </div>
        <div className="modalFooter">
          <button
            className="modalCloseBtn"
            onClick={() => {
              setModalActive(false);
              setTimeout(() => {
                setShowModal(false);
              }, 1000);
            }}
          >
            {/* add close icon */}X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
