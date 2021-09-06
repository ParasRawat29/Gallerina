import React, { useContext } from "react";
import { ImagesContext } from "../../context/images.context";
import ImageCard from "./ImageCard";

function ImagesContainer() {
  const images = useContext(ImagesContext);
  console.log("images", images);
  return (
    <div>
      {images &&
        images.map((item) => {
          return <ImageCard url={item.url} des={item.des} />;
        })}
    </div>
  );
}

export default ImagesContainer;
