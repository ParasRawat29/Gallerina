import React from "react";
import Modal from "../Modal";

function ImageModal({ selectedImage, isOpen, close }) {
  if (selectedImage.url)
    return (
      isOpen && (
        <Modal close={close} isOpen={isOpen}>
          <img
            src={selectedImage.url}
            className="img"
            alt={selectedImage.des}
          />
          <h4>{selectedImage.des}</h4>
        </Modal>
      )
    );
  else return <></>;
}

export default ImageModal;
