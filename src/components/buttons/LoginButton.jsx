import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./buttons.scss";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoginButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <>
      <Button
        color="login"
        size="sm"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        <span style={{ paddingRight: "5px" }}>
          <FontAwesomeIcon icon={faUser} />
        </span>
        {isLoading ? "Loading" : "Login"}
      </Button>
    </>
  );
}

export default LoginButton;
