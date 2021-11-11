import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./ModalBase.scss";

const modalRoot: HTMLElement | null = document.getElementById("modal-root");

const Modal: React.FC<{
  children: React.ReactNode;
  setShowModal: React.Dispatch<boolean>;
}> = ({ children, setShowModal }) => {
  const [el] = useState(document.createElement("div"));
  const outClick = useRef(el);

  useEffect(() => {
    const handleOutsideClick = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
    ) => {
      const { current } = outClick;
      if (current.childNodes[0] === e.target) {
        setShowModal(false);
      }
    };
    if (modalRoot) {
      modalRoot.appendChild(el);
      outClick.current?.addEventListener(
        "click",
        (e) => handleOutsideClick(e),
        false
      );
    }
    return () => {
      if (modalRoot) {
        modalRoot.removeChild(el);
        el.removeEventListener("click", (e) => handleOutsideClick(e), false);
      }
    };
  }, [el, setShowModal]);

  return ReactDOM.createPortal(children, el);
};

Modal.propTypes = {
  children: PropTypes.shape({
    $$typeof: PropTypes.symbol,
    key: PropTypes.number,
    props: PropTypes.object,
    type: PropTypes.func,
  }),
};
export default Modal;
