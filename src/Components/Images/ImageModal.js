import React from "react";
import Modal from "../Modal";

function ImageModal({ selectedImage, isOpen, close }) {
  console.log("isOpen", isOpen);
  if (selectedImage)
    return (
      isOpen && (
        <Modal close={close} isOpen={isOpen}>
          <img src={selectedImage} alt="l" width="100%" height="100%" />
        </Modal>
      )
    );
  else return <></>;
}

export default ImageModal;
