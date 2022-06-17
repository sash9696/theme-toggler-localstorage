import React from "react";
import "./Logout.css";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="login_button"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
