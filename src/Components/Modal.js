import React from "react";
import { Icon } from "rsuite";
import { ModalBackdrop } from "./Modal.styled";

function Modal({ children, close }) {
  function handleCloseClick() {
    close();
  }

  return (
    <ModalBackdrop>
      <button className="closeBtn" onClick={handleCloseClick}>
        <Icon icon="close-circle" size="3x" />
      </button>
      <div className="content">{children}</div>
    </ModalBackdrop>
  );
}

export default Modal;
