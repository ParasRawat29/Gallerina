import React, { useContext } from "react";
import { ImagesContext } from "../../context/images.context";
import ImageModal from "./ImageModal";
import ImageCard from "./ImageCard";
import { ImageGridStyle } from "./ImageContainer.styled";
import { useModal } from "../../custom-hooks";

function ImagesContainer({ setSelectedImage, selectedImage }) {
  const images = useContext(ImagesContext);

  const { isOpen, close, open } = useModal();
  return (
    <>
      <ImageGridStyle>
        {images &&
          images.map((item) => {
            return (
              <ImageCard
                url={item.url}
                des={item.des ? item.des : ""}
                setSelectedImage={setSelectedImage}
                open={open}
              />
            );
          })}
      </ImageGridStyle>
      {selectedImage.url && (
        <ImageModal
          selectedImage={selectedImage}
          isOpen={isOpen}
          close={close}
        />
      )}
    </>
  );
}

export default ImagesContainer;
