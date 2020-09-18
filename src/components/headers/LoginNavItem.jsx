import React from "react";
import { useSelector } from "react-redux";
import {
  Button, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faSignInAlt,
  faSignOutAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import { CONFIG } from "../../config";

const LoginNavItem = () => {
  const login = useSelector((state) => state.login);

  if (!login.user) {
    return (
      <NavItem>
        <NavLink href={CONFIG.LOGIN_URL} disabled={login.checking} tag={Button} color="link">
          Sign in
          {" "}
          <FontAwesomeIcon icon={login.checking ? faSpinner : faSignInAlt} />
        </NavLink>
      </NavItem>
    );
  }
  // logged in ... show dropdown menu
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {login.user.name}
        {" "}
        <FontAwesomeIcon icon={faUserCircle} />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem href={CONFIG.LOGOUT_URL}>
          Sign Out
          {" "}
          <FontAwesomeIcon icon={faSignOutAlt} />
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default LoginNavItem;
