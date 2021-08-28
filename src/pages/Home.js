import React, { useState } from "react";
import { Alert } from "rsuite";

const FileInputTypes = ".png , .jpg , .jpeg";
const acceptedFileTypes = ["image/png", "image/pjpeg", "image/jpeg"];

const isValidFile = (file) => {
  return acceptedFileTypes.includes(file.type);
};

function Home() {
  const [img, setImg] = useState(null);

  const onFileChange = (e) => {
    const currFiles = e.target.files;
    if (currFiles.length === 1) {
      const file = currFiles[0];
      if (isValidFile(file)) {
        console.log("yes");
      } else {
        Alert.error(`${file.name} is Wrong file type`, 3000);
      }
    }
  };
  return (
    <div>
      <h3 className="head">Your Gallery</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>

      <label htmlFor="FileUpload">
        Select new image
        <input
          id="FileUpload"
          type="file"
          accept={FileInputTypes}
          onChange={onFileChange}
        />
      </label>
    </div>
  );
}

export default Home;
