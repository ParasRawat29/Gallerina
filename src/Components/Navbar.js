import React, { useCallback } from "react";
import { Alert } from "rsuite";
import { auth } from "../config";
import { NavbarWrapper } from "./Navbar.styled";

function Navbar() {
  const onSignOutClick = useCallback(() => {
    auth.signOut();
    Alert.info("signed out", 3000);
  }, []);

  return (
    <NavbarWrapper>
      <ul>
        <li className="navHead">Gallerina</li>
        <li>
          <button className="signOutBtn" onClick={onSignOutClick}>
            SignOut
          </button>
        </li>
      </ul>
    </NavbarWrapper>
  );
}

export default Navbar;
