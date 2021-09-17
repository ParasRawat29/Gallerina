import React, { useContext, useState } from "react";
import { Alert, Icon, Loader } from "rsuite";

import { HomeWrapper } from "./Home.styled";

import Navbar from "../Components/Navbar";
import ImagesContainer from "../Components/Images/ImagesContainer";
import UploadModal from "../Components/PreviewModal";
import { useModal } from "../custom-hooks";
import { ProfileContext } from "../context/profile.context";
const FileInputTypes = ".png , .jpg , .jpeg";
const acceptedFileTypes = ["image/png", "image/pjpeg", "image/jpeg"];

const isValidFile = (file) => {
  return acceptedFileTypes.includes(file.type);
};

function Home() {
  const [img, setImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [description, setDescription] = useState(null);
  const [percentage, setPercentage] = useState(0);
  const [selectedImage, setSelectedImage] = useState({
    url: null,
    des: null,
    id: "",
    UploadedAt: "",
  });

  const { isOpen, open, close } = useModal();

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

  const onDescriptionChange = (e) => {
    let des = e.target.value;
    setDescription(des);
  };
  return (
    <>
      <Navbar />
      <HomeWrapper>
        <h3 className="head">Gallery</h3>

        <label htmlFor="FileUpload">
          <Icon icon="plus-circle" size="3x" strokeColor="red" />
          <input
            id="FileUpload"
            type="file"
            accept={FileInputTypes}
            onChange={onFileInputChange}
          />
        </label>
        <UploadModal
          img={img}
          preview={preview}
          setDescription={setDescription}
          description={description}
          onDescriptionChange={onDescriptionChange}
          percentage={percentage}
          setPercentage={setPercentage}
          isOpen={isOpen}
          close={close}
          open={open}
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
