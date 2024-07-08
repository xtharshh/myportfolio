import React from "react";
import { Button } from "@mui/material";
import "../global.css";

import harshpic from "../assets/harshpic.png";
// import ticksound from "./assets/typewrite.mp3";

function Profile() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning🌄";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon🕑";
  } else {
    greeting = "Good Evening🌆";
  }

  return (
    <>
      <div className="first-div">
        <div className="second-div zoom150">
          <img
            src={harshpic}
            alt="Harsh Kumar"
            className="photoleft sliding-text"
          />
        </div>
        <div
          className="divright"
          style={{
            border: "0.1px solid black",
            padding: "30px",
            borderRadius: "5px",
          }}
        >
          <h1
            className="zoom greet"
            style={{ fontFamily: "monospace", fontSize: "30px" }}
          >
            Hello! {greeting}
          </h1>
          {/* <audio id="type-sound " src="path_to_your_tick_sound.mp3"></audio> */}

          {/* <span className="text-center">
            I am from Gurugram, Haryana. And I am pursuing Bachelor's Of
            Technology in Computer Science And Engineering from Chandigarh
            Engineering College, Mohali.
          </span> */}
          <br />
          <div className="buttondiv">
            <Button
              className="resume zoom"
              variant="outlined"
              sx={{
                blockSize: 50,

                backgroundColor: "black",

                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                fontFamily: "monospace",
                border: "2px solid black",
              }}
              href="https://www.wa.link/rz4hag"
            >
              Let's Chat
            </Button>
            <Button
              className="resume zoom"
              variant="outlined"
              href="https://drive.google.com/file/d/15S_ukV1fTedeCigpk-9axhE_ScUFtyDF/view?usp=drivesdk"
              sx={{
                color: "black",

                blockSize: 50,
                fontFamily: "monospace",
                borderColor: "20px black",
                fontWeight: "bold",
                fontSize: "1rem",

                // Added border style
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
