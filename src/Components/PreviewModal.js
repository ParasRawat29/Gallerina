import React from "react";
import { Progress } from "rsuite";
import Modal from "../Components/Modal";
import { PreviewModalStyle } from "../pages/Home.styled";

function PreviewModal({
  preview,
  isOpen,
  close,
  percentage,
  isLoading,
  open,
  description,
  onUploadClick,
  onDescriptionChange,
}) {
  return (
    preview &&
    isOpen && (
      <PreviewModalStyle>
        <Modal close={close} open={open}>
          {isLoading && (
            <Progress.Line
              percent={percentage}
              strokeColor="#ffc107"
              status="active"
              strokeWidth="6"
            />
          )}
          <header>Add Description and Upload</header>
          <section>
            <img src={preview} alt="yourimage" />
          </section>
          <footer>
            <textarea
              className="textareaInput"
              type="textarea"
              maxLength="100"
              placeholder="Add Description (max 100 characters)"
              value={description}
              onChange={onDescriptionChange}
              disabled={isLoading}
            />
            <button
              className="uploadBtn"
              onClick={onUploadClick}
              disabled={isLoading}
            >
              Upload
            </button>
          </footer>
        </Modal>
      </PreviewModalStyle>
    )
  );
}

export default PreviewModal;
