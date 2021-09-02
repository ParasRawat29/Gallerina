import React, { useState, useContext } from "react";
import { Alert, Icon } from "rsuite";
import Modal from "../Components/Modal";
import { database, storage } from "../config";
import { useModal } from "../custom-hooks";
import { HomeWrapper, PreviewModal } from "./Home.styled";
import { ProfileContext } from "../context/profile.context";
import { Progress } from "rsuite";
import Navbar from "../Components/Navbar";

const FileInputTypes = ".png , .jpg , .jpeg";
const acceptedFileTypes = ["image/png", "image/pjpeg", "image/jpeg"];

const isValidFile = (file) => {
  return acceptedFileTypes.includes(file.type);
};

function Home() {
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const { isOpen, open, close } = useModal();
  const [description, setDescription] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const profile = useContext(ProfileContext);

  const onFileInputChange = (e) => {
    const currFiles = e.target.files;

    if (currFiles.length === 1) {
      let file = currFiles[0];
      if (isValidFile(file)) {
        setImg(file);
        let reader = new FileReader();
        reader.onloadend = (e) => {
          setPreview(e.target.result);
        };
        reader.readAsDataURL(file);
        open();
      } else {
        Alert.error(`${file.name} is Wrong file type`, 3000);
      }
      e.target.value = "";
    }
  };

  const onUploadClick = async () => {
    try {
      setIsLoading(true);
      storage
        .ref(`/profiles/${profile.uid}`)
        .child(img.name)
        .put(img)
        .on(
          "state_changed",
          (snap) => {
            const per = Math.round(
              (snap.bytesTransferred / snap.totalBytes) * 100
            );
            setPercentage(per);
          },
          (err) => {},
          () => {
            storage
              .ref(`/profiles/${profile.uid}`)
              .child(img.name)
              .getDownloadURL()
              .then((url) => {
                database.ref(`/profiles/${profile.uid}/image`).push().set({
                  url: url,
                  des: description,
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
      Alert.error("Image Not uploaded", 3000);
      setIsLoading(false);
      console.log(error);
    }
  };

  const onDescriptionChange = (e) => {
    let des = e.target.value;
    setDescription(des);
  };
  return (
    <>
      <Navbar />
      <HomeWrapper>
        <h3 className="head">Your Gallery</h3>
        <h6>Lorem ipsum dolor, sit amet consectetur adipisicing</h6>

        <label htmlFor="FileUpload">
          <Icon icon="plus-circle" size="3x" strokeColor="red" />
          <input
            id="FileUpload"
            type="file"
            accept={FileInputTypes}
            onChange={onFileInputChange}
          />
        </label>

        {preview && isOpen && (
          <PreviewModal>
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
          </PreviewModal>
        )}
      </HomeWrapper>
    </>
  );
}

export default Home;
