import React, { useContext } from "react";
import { ImagesContext } from "../../context/images.context";
import ImageModal from "./ImageModal";
import ImageCard from "./ImageCard";
import { ImageGridStyle } from "./ImageContainer.styled";
import { useModal } from "../../custom-hooks";
import { Loader } from "rsuite";

function ImagesContainer({ setSelectedImage, selectedImage }) {
  const { images, isLoading } = useContext(ImagesContext);
  const { isOpen, close, open } = useModal();

  return (
    <>
      <ImageGridStyle>
        {isLoading && <Loader speed="normal" center size="lg" />}

        {images && images.length === 0 && !isLoading && (
          <h4>Add images using the + icon</h4>
        )}

        {images &&
          images.map((item, index) => {
            return (
              <ImageCard
                key={index}
                url={item.url}
                des={item.des ? item.des : ""}
                setSelectedImage={setSelectedImage}
                id={item.id}
                open={open}
                UploadedAt={item.UploadedAt}
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
