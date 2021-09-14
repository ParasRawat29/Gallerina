import React from "react";
import { Icon } from "rsuite";
import { ModalBackdrop } from "./Modal.styled";
import { motion } from "framer-motion";
function Modal({ children, close }) {
  function handleCloseClick() {
    close();
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <ModalBackdrop>
        <button className="closeBtn" onClick={handleCloseClick}>
          <Icon icon="close-circle" size="3x" />
        </button>
        <div className="content">{children}</div>
      </ModalBackdrop>
    </motion.div>
  );
}

export default Modal;
