import React, { createContext, useEffect, useState } from "react";
import { auth, database } from "../config";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profiles, setProfiles] = useState(null);

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
        });
      }
    });

    return () => {
      authUnSub();
      if (userRef) userRef.off();
    };
  }, []);
  return (
    <ProfileContext.Provider value={profiles}>
      {children}
    </ProfileContext.Provider>
  );
}
export { ProfileContext };
