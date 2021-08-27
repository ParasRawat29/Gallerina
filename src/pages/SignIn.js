import React from "react";
import { auth, database } from "../config";
import firebase from "firebase/app";

function SignIn() {
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      // console.log(additionalUserInfo);
      if (additionalUserInfo.isNewUser) {
        console.log("here");
        let userRef = database.ref(`/profiles/${user.uid}`);
        await userRef.set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <div>
      <div className="signInHeading">
        <h1 className="head">Gallerina</h1>
        <h4>Sign In</h4>
      </div>
      <div className="signInBtnContainer">
        <div className="googleSignIn">
          <button onClick={onGoogleSignIn}>Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
