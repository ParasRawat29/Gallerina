import React, { useState, useContext } from "react";
import { Alert } from "rsuite";
import Modal from "../Components/Modal";
import { database, storage } from "../config";
import { useModal } from "../custom-hooks";
import { PreviewModal } from "./Home.styled";
import { ProfileContext } from "../context/profile.context";

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
    // console.log(description);
    try {
      const storageRef = storage
        .ref(`/profiles/${profile.uid}`)
        .child(img.name);
      await storageRef.put(img);
      const url = await storageRef.getDownloadURL();
      const dbRef = database.ref(`/profiles/${profile.uid}/image`).push().set({
        url: url,
        des: description,
      });
      Alert.success("Image Uploaded", 3000);
    } catch (error) {
      Alert.error("Image Not uploaded", 3000);
      console.log(error);
    }
  };

  const onDescriptionChange = (e) => {
    let des = e.target.value;
    setDescription(des);
  };
  return (
    <div>
      <h3 className="head">Your Gallery</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>

      <label htmlFor="FileUpload">
        Select new image
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
              />
              <button className="uploadBtn" onClick={onUploadClick}>
                Upload
              </button>
            </footer>
          </Modal>
        </PreviewModal>
      )}
    </div>
  );
}

export default Home;
