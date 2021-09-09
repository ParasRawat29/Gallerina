import React, { useContext } from "react";
import { Alert, Icon } from "rsuite";
import { database } from "../../config";
import { ProfileContext } from "../../context/profile.context";
import Modal from "../Modal";

function ImageModal({ selectedImage, isOpen, close }) {
  const { profiles } = useContext(ProfileContext);
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await database.ref(`/profiles/${profiles.uid}/images/${id}`).remove();
      Alert.success("image removed");
      close();
    } catch (error) {
      Alert.error("Image not deleted");
    }
  };

  if (selectedImage.url)
    return (
      isOpen && (
        <Modal close={close} isOpen={isOpen}>
          <img
            src={selectedImage.url}
            className="img"
            alt={selectedImage.des}
          />
          <div className="footer">
            <h4>{selectedImage.des}</h4>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(selectedImage.id)}
            >
              <Icon icon="trash" size="3x" />
            </button>
          </div>
        </Modal>
      )
    );
  else return <></>;
}

export default ImageModal;
