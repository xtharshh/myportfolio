import React, { useRef } from "react";
import "../global.css";
function Navbar({
  handleExperienceClick,
  handleProjectsClick,
  handleContactsClick,
  handleIntroductionClick,
}) {
  return (
    <nav class="menu menu-5">
      <div
        class="name zoom150"
        style={{
          border: "0.1px solid black",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <h1
          class="typing-effect"
          onClick={handleIntroductionClick}
          style={{ fontSize: "2.5rem" }}
        >
          HARSH KUMAR
        </h1>
      </div>
      <ul>
        <li>
          <a href="#" onClick={handleExperienceClick} class="zoom150">
            EXPERIENCE
          </a>
        </li>
        <li>
          <a href="#" onClick={handleProjectsClick} class="zoom150">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#" class="zoom150">
            CERTIFICATIONS
          </a>
        </li>
        <li>
          <a href="#" onClick={handleContactsClick} class="zoom150">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
