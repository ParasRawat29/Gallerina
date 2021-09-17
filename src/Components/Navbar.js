import React, { useCallback, useContext } from "react";
import { Alert } from "rsuite";
import { auth } from "../config";
import { ProfileContext } from "../context/profile.context";
import { NavbarWrapper } from "./Navbar.styled";
import demoPic from "../Images/demoPic.png";
function Navbar() {
  const onSignOutClick = useCallback(() => {
    auth.signOut();
    Alert.info("signed out", 3000);
  }, []);

  const { profiles } = useContext(ProfileContext);

  if (profiles) {
    return (
      <NavbarWrapper>
        <ul>
          <li className="navHead">Gallerina</li>

          <li>
            <img
              src={profiles.profilePic ? profiles.profilePic : demoPic}
              alt="profilePic"
              className="profilePic"
            />
            <button className="signOutBtn" onClick={onSignOutClick}>
              Sign Out
            </button>
          </li>
        </ul>
      </NavbarWrapper>
    );
  } else {
    return <></>;
  }
}

export default Navbar;
