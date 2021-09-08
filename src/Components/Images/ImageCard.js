import React from "react";

function ImageCard({ url, des, setSelectedImage, open }) {
  return (
    <img
      src={url}
      alt={des}
      width="400"
      height="200"
      onClick={() => {
        open();
        setSelectedImage(url);
      }}
    />
  );
}

export default ImageCard;
