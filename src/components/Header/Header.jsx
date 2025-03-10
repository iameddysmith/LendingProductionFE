import React from "react";
import "./Header.css";
import headerLogo from "../../assets/bridgecrestLogo.png";
import avatar1 from "../../assets/default-avatar.png";

function Header() {
  const currentUser = {
    name: "Edward Smith",
    avatar: "/assets/default-avatar.png",
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="header__logo-section">
            <img
              src={headerLogo}
              alt="Bridgecrest Logo"
              className="header__logo"
            />
          </div>

          <div className="header__profile">
            <img
              src={avatar1}
              alt={currentUser.name || "User Avatar"}
              className="header__profile-avatar"
            />
            <span className="header__profile-name">{currentUser.name}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
