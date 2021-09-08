import React, { useState, useContext } from "react";
import { Alert, Icon } from "rsuite";
import { database, storage } from "../config";
import { useModal } from "../custom-hooks";
import { HomeWrapper } from "./Home.styled";
import { ProfileContext } from "../context/profile.context";
import Navbar from "../Components/Navbar";
import ImagesContainer from "../Components/Images/ImagesContainer";
import PreviewModal from "../Components/PreviewModal";

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
  const [selectedImage, setSelectedImage] = useState(null);
  const { profiles } = useContext(ProfileContext);

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
          setPercentage(per);
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

  const onDescriptionChange = (e) => {
    let des = e.target.value;
    setDescription(des);
  };
  console.log(selectedImage);
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
        <PreviewModal
          preview={preview}
          isOpen={isOpen}
          close={close}
          open={open}
          description={description}
          setDescription={setDescription}
          onDescriptionChange={onDescriptionChange}
          isLoading={isLoading}
          percentage={percentage}
          onUploadClick={onUploadClick}
        />
        <ImagesContainer
          setSelectedImage={setSelectedImage}
          selectedImage={selectedImage}
        />
      </HomeWrapper>
    </>
  );
}

export default Home;
