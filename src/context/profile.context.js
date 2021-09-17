import React, { createContext, useEffect, useState } from "react";
import { auth, database } from "../config";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;
    const authUnSub = auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on("value", (snap) => {
          const data = {
            ...snap.val(),
            uid: authObj.uid,
            email: authObj.email,
          };

          setProfiles(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) userRef.off();
        setProfiles(null);
        setIsLoading(false);
      }
    });

    return () => {
      if (userRef) {
        userRef.off();
      }
      authUnSub();
    };
  }, []);
  return (
    <ProfileContext.Provider value={{ profiles, isLoading }}>
      {children}
    </ProfileContext.Provider>
  );
}
export { ProfileContext };
