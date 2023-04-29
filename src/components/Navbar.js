import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar({ isLoggedIn, handleLogout }) {
  const history = useHistory();

  function handleLogoutClick() {
    handleLogout();
    history.push("/login");
  }

  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink
            to="/profile"
            exact
            style={linkStyles}
            activeStyle={{
              background: "darkblue",
            }}
          >
            Profile
          </NavLink>
          <button onClick={handleLogoutClick}>Logout</button>
        </>
      ) : (
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      )}
    </div>
  );
}

export default Navbar;
