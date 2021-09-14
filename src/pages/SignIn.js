import React from "react";
import { auth, database } from "../config";
import firebase from "firebase/app";
import { SignInBtnWrapper, SignInWrapper } from "./SignIn.styled";
import { Alert, Icon } from "rsuite";

function SignIn() {
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      Alert.success("signed in", 3000);

      if (additionalUserInfo.isNewUser) {
        let userRef = database.ref(`/profiles/${user.uid}`);
        await userRef.set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          images: [{}],
          profilePic: user.photoURL,
        });
      }
    } catch (err) {
      Alert.info(err.message, 3000);
    }
  };

  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <SignInWrapper>
      <div div className="signInHeading">
        <h1 className="head">Gallerina</h1>
        <h5 className="info">Your Photo Keeper</h5>
      </div>
      <SignInBtnWrapper>
        <div className="googleSignIn">
          <button onClick={onGoogleSignIn}>
            <Icon icon="google" size="2x" /> Google Sign In
          </button>
        </div>
      </SignInBtnWrapper>
    </SignInWrapper>
  );
}

export default SignIn;
