import React, { useState, useEffect } from "react";
import "../global.css";
import "../styles/nav.css";
import { Dropdown } from "rsuite";
import PageIcon from "@rsuite/icons/Page";
function Navbar({
  handleExperienceClick,
  handleProjectsClick,
  handleContactsClick,
  handleIntroductionClick,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(
    window.innerWidth <= 800
  );
  const [isDesktopScreen, setIsDesktopScreen] = useState(
    window.innerWidth >= 800
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 1000);
      setIsDesktopScreen(window.innerWidth >= 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu menu-5">
      <div
        className="name zoom150"
        style={{
          border: "0.1px solid black",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <h1
          className="typing-effect"
          onClick={handleIntroductionClick}
          style={{ fontSize: "2.5rem" }}
        >
          HARSH KUMAR
        </h1>
      </div>
      {isDesktopScreen && (
        <ul>
          <li className="desktop-only">
            <a onClick={handleExperienceClick} className="zoom150">
              EXPERIENCE
            </a>
          </li>
          <li className="desktop-only">
            <a onClick={handleContactsClick} className="zoom150">
              CONTACT
            </a>
          </li>
          <li className="desktop-only">
            <a className="zoom150">CERTIFICATIONS</a>
          </li>
          <li className="desktop-only">
            <a onClick={handleProjectsClick} className="zoom150">
              PROJECTS
            </a>
          </li>
        </ul>
      )}
      {isMobileScreen && (
        <div className="hamburger-menu">
          <div
            className={`menu-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          {isOpen && (
            <ul className="menu-items">
              <li className="mobile-only">
                <a onClick={handleExperienceClick} className="zoom150">
                  EXPERIENCE
                </a>
              </li>
              <li className="mobile-only">
                <a onClick={handleContactsClick} className="zoom150">
                  CONTACT
                </a>
              </li>
              <li className="mobile-only">
                <a className="zoom150">CERTIFICATIONS</a>
              </li>
              <li className="mobile-only">
                <a onClick={handleProjectsClick} className="zoom150">
                  PROJECTS
                </a>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
