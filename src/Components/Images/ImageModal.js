/* eslint-disable no-restricted-globals */
import React, { useContext, useState } from "react";
import { Alert } from "rsuite";
import { database, storage } from "../../config";
import { ProfileContext } from "../../context/profile.context";
import Modal from "../Modal";

function ImageModal({ selectedImage, isOpen, close }) {
  const { profiles } = useContext(ProfileContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (selectedImage) => {
    // console.log(selectedImage);
    let deleteIt = confirm("Do you want to delete the image");

    if (deleteIt) {
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
    }
  };

  if (selectedImage.url)
    return (
      isOpen && (
        <Modal close={close} isOpen={isOpen}>
          <div className="imageUploadWrapper">
            <div className="imgWrapper">
              <img
                className="img"
                src={selectedImage.url}
                alt={selectedImage.des}
              />
            </div>

            <div className="info">
              <p className="date">
                {selectedImage.UploadedAt
                  ? new Date(selectedImage.UploadedAt).toLocaleDateString()
                  : ""}
              </p>
              <h4 className="description">{selectedImage.des}</h4>
            </div>

            <div className="footer">
              <button
                className="deleteBtn"
                onClick={() => handleDelete(selectedImage)}
                disabled={isLoading}
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )
    );
  else return <></>;
}

export default ImageModal;
