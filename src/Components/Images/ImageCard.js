import React from "react";
import { motion } from "framer-motion";
function ImageCard({ url, des, id, setSelectedImage, open, UploadedAt }) {
  return (
    <motion.img
      whileHover={{ scale: "1.1", cursor: "pointer" }}
      whileTap={{ scale: "0.9" }}
      src={url}
      layout
      alt={des}
      onClick={() => {
        open();
        setSelectedImage(() => {
          return {
            url: url,
            des: des,
            id: id,
            UploadedAt: UploadedAt,
          };
        });
      }}
      className="photoInGrid"
    />
  );
}

export default ImageCard;
