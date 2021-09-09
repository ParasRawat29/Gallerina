import React from "react";

function ImageCard({ url, des, id, setSelectedImage, open }) {
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
            id: id,
          };
        });
      }}
      className="photoInGrid"
    />
  );
}

export default ImageCard;
