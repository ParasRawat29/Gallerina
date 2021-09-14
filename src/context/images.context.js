import React, { createContext, useContext, useEffect, useState } from "react";
import { database } from "../config";
import { ProfileContext } from "./profile.context";
import { transformToArrayWithId } from "../misc/helper";
const ImagesContext = createContext();

export function ImagesProvider({ children }) {
  const { profiles } = useContext(ProfileContext);
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (profiles) {
      const imagesRef = database
        .ref(`/profiles/${profiles.uid}/images`)
        .orderByChild("UploadedAt");
      imagesRef.on("value", (snap) => {
        setImages(() => transformToArrayWithId(snap.val()).reverse());
      });
      setIsLoading(false);
    }
    return () => {};
  }, [profiles]);

  return (
    <ImagesContext.Provider value={{ images, isLoading }}>
      {children}
    </ImagesContext.Provider>
  );
}
export { ImagesContext };
