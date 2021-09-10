import React, { useContext, useState } from "react";
import { Alert, Icon } from "rsuite";
import { database, storage } from "../../config";
import { ProfileContext } from "../../context/profile.context";
import Modal from "../Modal";

function ImageModal({ selectedImage, isOpen, close }) {
  const { profiles } = useContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (selectedImage) => {
    console.log(selectedImage);
    setIsLoading(true);
    try {
      await storage.refFromURL(selectedImage.url).delete();
      await database
        .ref(`/profiles/${profiles.uid}/images/${selectedImage.id}`)
        .remove();
      setIsLoading(false);
      Alert.success("image removed");
      close();
    } catch (error) {
      setIsLoading(false);
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
              onClick={() => handleDelete(selectedImage)}
              disabled={isLoading}
            >
              Delete
            </button>
          </div>
        </Modal>
      )
    );
  else return <></>;
}

export default ImageModal;
