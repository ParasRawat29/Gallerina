import React from "react";

function ImageCard({ url, des }) {
  console.log();
  return <img src={url} alt={des} width="400" height="200" />;
}

export default ImageCard;
