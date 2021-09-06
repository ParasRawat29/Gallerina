import React, { useContext } from "react";
import { ImagesContext } from "../context/images.context";

function ImagesContainer() {
  const images = useContext(ImagesContext);
  console.log("images", images);
  return <div>kg</div>;
}

export default ImagesContainer;
