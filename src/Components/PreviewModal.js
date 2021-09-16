import React, { useContext } from "react";
import { Alert, Progress } from "rsuite";
import Modal from "../Components/Modal";
import { PreviewModalStyle } from "../pages/Home.styled";
import { database, storage } from "../config";
import { ProfileContext } from "../context/profile.context";
import firebase from "firebase";

function UploadModal({
  preview,
  percentage,
  isLoading,
  description,
  onDescriptionChange,
  setIsLoading,
  setPercentage,
  img,
  open,
  close,
  isOpen,
  setDescription,
}) {
  const { profiles } = useContext(ProfileContext);

  const onUploadClick = async () => {
    try {
      setIsLoading(true);
      const uploadTask = storage
        .ref(`/profiles/${profiles.uid}`)
        .child(img.name)
        .put(img);
      uploadTask.on(
        "state_changed",
        (snap) => {
          const per = Math.round(
            (snap.bytesTransferred / snap.totalBytes) * 100
          );
          setPercentage(() => per);
        },
        (error) => {
          console.log(error);
          Alert.error(error.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            database.ref(`/profiles/${profiles.uid}/images`).push().set({
              url: url,
              des: description,
              UploadedAt: firebase.database.ServerValue.TIMESTAMP,
            });
          });
          setIsLoading(false);
          setPercentage(0);
          Alert.success("Image Uploaded", 3000);
          setDescription("");
          close();
        }
      );
    } catch (error) {
      setIsLoading(false);
      setPercentage(0);
      setDescription("");
      console.log(error);
      close();
      Alert.error("Image Not uploaded", 3000);
    }
  };

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
              strokeWidth="3"
            />
          )}
          <div className="previewWrapper">
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
          </div>
        </Modal>
      </PreviewModalStyle>
    )
  );
}

export default UploadModal;
