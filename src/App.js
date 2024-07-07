import React, { useRef } from "react";
import Navbar from "./components/navbar";
import TechStack from "./components/techstack";
import MediaCard from "./components/projects";
import Profile from "./components/profile";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Introduction from "./components/introduction";
export default function App() {
  const experienceRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const certificatesRef = useRef();
  const introductionRef = useRef();

  const handleScrollToTechStack = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToCertificates = () => {
    certificatesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToIntroduction = () => {
    introductionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar
        handleExperienceClick={handleScrollToTechStack}
        handleProjectsClick={handleScrollToProjects}
        handleContactsClick={handleScrollToContact}
        handleIntroductionClick={handleScrollToIntroduction}
      />
      <div>
        <Profile />
      </div>
      <div ref={introductionRef}>
        <Introduction />
      </div>
      <div ref={experienceRef}>
        <TechStack />
      </div>
      <div ref={projectsRef}>
        <MediaCard />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
