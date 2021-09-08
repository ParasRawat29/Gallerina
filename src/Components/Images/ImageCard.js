import React from "react";

function ImageCard({ url, des, setSelectedImage, open }) {
  return (
    <img
      src={url}
      alt={des}
      onClick={() => {
        open();
        setSelectedImage(() => {
          return {
            url: url,
            des: des,
          };
        });
      }}
      className="photoInGrid"
    />
  );
}

export default ImageCard;
