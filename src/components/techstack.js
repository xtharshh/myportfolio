import React, { useRef } from "react";
import "../styles/techstack.css";
import { RiReactjsFill } from "react-icons/ri";
import { MdApi } from "react-icons/md";
import { IoLogoVercel } from "react-icons/io5";
import { SiMui, SiTailwindcss, SiTypescript } from "react-icons/si";
import { SiExpress, SiPostgresql, SiMysql } from "react-icons/si";
import {
  DiJsBadge,
  DiHtml5,
  DiMongodb,
  DiCss3,
  DiBootstrap,
  DiNodejsSmall,
  DiGit,
  DiJqueryLogo,
} from "react-icons/di";

const frontendSkills = [
  { name: "HTML", logo: <DiHtml5 size={40} color="darkyellow" /> },
  { name: "CSS", logo: <DiCss3 size={40} color="blue" /> },
  {
    name: "Tailwind CSS",
    logo: <SiTailwindcss size={40} color="skyblue" />,
  },
  { name: "JavaScript", logo: <DiJsBadge size={40} color="darkorange" /> },
  { name: "jQuery", logo: <DiJqueryLogo size={40} /> },
  { name: "React.js", logo: <RiReactjsFill size={40} color="skyblue" /> },
  {
    name: "TypeScript",
    logo: <SiTypescript size={40} color="blue" />,
  },
  {
    name: "Material UI",
    logo: <SiMui size={40} color="blue" />,
  },
  {
    name: "BootStrap",
    logo: <DiBootstrap size={40} color="purple" />,
  },
];

const backendSkills = [
  {
    name: "Node.js",
    logo: <DiNodejsSmall size={40} color="green" />,
  },
  { name: "Express.js", logo: <SiExpress size={40} color="red" /> },
  {
    name: "MongoDB",
    logo: <DiMongodb size={40} color="green" />,
  },
  { name: "PostgreSQL", logo: <SiPostgresql size={40} color="black" /> },
  { name: "Git", logo: <DiGit size={40} color="orange" /> },
  {
    name: "MySQL",
    logo: <SiMysql size={40} color="black" />,
  },
  { name: "API", logo: <MdApi size={40} color="black" /> },
  { name: "Vercel", logo: <IoLogoVercel size={40} color="black" /> },
];

export default function TechStack() {
  const experienceRef = useRef();

  return (
    <div ref={experienceRef} className="tech-stack-container">
      <span
        style={{
          fontFamily: "monospace",
          color: "grey",
          fontSize: "24px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          fontWeight: "bold",
        }}
      >
        Explore
      </span>
      <header>
        <h1 className="title">My Skills</h1>
      </header>
      <div className="container">
        <div className="section frontend zoom">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "20px",
              fontFamily: "cursive",
            }}
          >
            Frontend Development
          </h2>
          <ul className="skill-list">
            {frontendSkills.map((skill, index) => (
              <li
                style={{ fontSize: "20px", fontFamily: "monospace" }}
                key={index}
                className="skill-item"
              >
                {skill.logo}
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="section backend zoom">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              fontSize: "20px",
              fontFamily: "cursive",
            }}
          >
            Backend Development
          </h2>
          <ul className="skill-list">
            {backendSkills.map((skill, index) => (
              <li
                style={{ fontSize: "80px", fontFamily: "monospace" }}
                key={index}
                className="skill-item"
              >
                {skill.logo}
                <span className="skill-name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
