import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./ModalBase.scss";

const Modal: React.FC<{
  children: React.ReactNode;
  setShowModal: React.Dispatch<boolean>;
  showModal: boolean;
  closeModalTimeOut?: number;
  clickOutSide?: boolean;
}> = ({
  children,
  setShowModal,
  showModal,
  closeModalTimeOut = null,
  clickOutSide = true,
}) => {
  const modalRoot: HTMLElement | null = document.getElementById("modal-root");
  const [el] = useState(document.createElement("div"));
  const outClick = useRef(el);
  const handleEsc = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    const handleOutsideClick = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent> | MouseEvent
    ) => {
      const { current } = outClick;
      if (current.childNodes[0] !== e.target) {
        // console.log(current.childNodes[0], e.target);
        modalRoot?.classList.remove("modalRootActive");
        // Time for animation.
        setTimeout(() => {
          setShowModal(false);
        }, 1500);
      }
    };
    if (modalRoot && showModal) {
      modalRoot.classList.add("modalRootActive");
      document.addEventListener("keydown", (event) => handleEsc(event), false);

      modalRoot.appendChild(el);
      if (typeof closeModalTimeOut === "number") {
        setTimeout(() => {
          setShowModal(false);
        }, closeModalTimeOut);
      }
    }
    if (clickOutSide) {
      outClick.current?.addEventListener(
        "click",
        (e) => handleOutsideClick(e),
        false
      );
    }
    return () => {
      if (modalRoot && modalRoot.hasChildNodes()) {
        modalRoot.classList.remove("modalRootActive");
        // Time for animation.
        setTimeout(() => {
          modalRoot.removeChild(el);
        }, 1500);
        document.removeEventListener(
          "keydown",
          (event) => handleEsc(event),
          false
        );
      }
      if (clickOutSide) {
        el.removeEventListener("click", (e) => handleOutsideClick(e), false);
      }
    };
  }, [
    showModal,
    setShowModal,
    el,
    modalRoot,
    clickOutSide,
    closeModalTimeOut,
    handleEsc,
  ]);

  return ReactDOM.createPortal(children, el);
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  setShowModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
export default Modal;
