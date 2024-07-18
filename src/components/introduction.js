// App.js
import React, { useRef } from "react";
import "../styles/intro.css";
import { Button } from "@mui/material";
import harshpic1 from "../assets/harshpic1.jpg";

function Introduction() {
  const introductionRef = useRef();
  return (
    <div
      ref={introductionRef}
      className="intro"
      style={{ borderRadius: "5px" }} //backgroundColor: "#ffe135",
    >
      <header className="header-intro">
        <span
          style={{
            fontFamily: "monospace",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Welcome to
        </span>
        <h1>My Portfolio</h1>
      </header>
      <main className="flex-container">
        <section id="about" className="zoom box">
          <h2
            style={{
              textAlign: "center",
              fontSize: "24px",
              fontFamily: "cursive",
            }}
          >
            Know About Me
          </h2>

          <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
            Hi,{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              I'm Harsh Kumar
            </span>
            , a 3rd Year student at{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              Chandigarh Engineering College, Mohali
            </span>
            , pursuing a degree in{" "}
            <span style={{ color: "orange", fontWeight: "bold" }}>
              Bachelor's of Technology in Computer Science And Engineering
              (2k22-2k26)
            </span>
            . Born and raised in Gurgaon, Haryana. I'm a hardworking, passionate
            and confident individual with a strong enthusiasm for Innovations
            and Technologies.
          </p>
          <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
            When I'm not coding or studying, you can find me playing cricket and
            doing graphic designing. I'm excited to share my projects and
            experiences with you, and I hope you enjoy exploring my portfolio!
          </p>
        </section>

        <section id="contact" className="zoom box box.git">
          <img
            src={harshpic1}
            alt="MyPhoto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxWidth: "300px",
              maxHeight: "900px",
            }}
          />
        </section>

        <div className="box box-skill zoom">
          <h3 style={{ fontSize: "24px", fontFamily: "cursive" }}>Skills</h3>
          <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
            Full Stack Web Developer
          </p>
          <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
            Graphic Designer
          </p>
          <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
            UI/UX Designer
          </p>
          <p style={{ fontSize: "20px", fontFamily: "monospace" }}>
            C, C++, Java
          </p>
        </div>

        <div className="box box-git zoom" style={{ borderRadius: "5px" }}>
          <Button
            href="https://www.github.com/xtharshh"
            className="button-contact zoom"
            variant="outlined"
            color="primary"
            size="large"
            style={{
              fontFamily: "monospace",
              color: "white",
              backgroundColor: "black",
              marginLeft: "10%",
              marginRight: "10%",

              justifyContent: "center",
              alignItems: "center",
              // Add this line to set the button border color to black
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore My Projects
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Introduction;
