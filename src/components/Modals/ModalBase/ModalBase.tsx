import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./ModalBase.scss";

const Modal: React.FC<{
  children: React.ReactNode;
  setShowModal: React.Dispatch<boolean>;
  showModal: boolean;
}> = ({ children, setShowModal, showModal }) => {
  const modalRoot: HTMLElement | null = document.getElementById("modal-root");
  const [el] = useState(document.createElement("div"));
  const outClick = useRef(el);

  useEffect(() => {
    const handleOutsideClick = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
    ) => {
      const { current } = outClick;
      if (current.childNodes[0] === e.target) {
        modalRoot?.classList.remove("modalRootActive");
        // Time for animation.
        setTimeout(() => {
          setShowModal(false);
        }, 1500);
      }
    };
    if (modalRoot && showModal) {
      modalRoot.classList.add("modalRootActive");
      outClick.current?.addEventListener(
        "click",
        (e) => handleOutsideClick(e),
        false
      );
      modalRoot.appendChild(el);
      setTimeout(() => {
        setShowModal(false);
      }, 1500);
    }
    return () => {
      if (modalRoot && modalRoot.hasChildNodes()) {
        modalRoot.classList.remove("modalRootActive");
        el.removeEventListener("click", (e) => handleOutsideClick(e), false);
        // Time for animation.
        setTimeout(() => {
          modalRoot.removeChild(el);
        }, 1500);
      }
    };
  }, [showModal, setShowModal, el, modalRoot]);

  return ReactDOM.createPortal(children, el);
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
export default Modal;
