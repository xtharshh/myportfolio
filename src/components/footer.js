import React from "react";
import "../styles/footer.css";
import { Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="footer">
      <hr />
      <div className="footer-content" style={{ padding: "20px" }}>
        <div className="button-group">
          <Button
            className="scroll-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            variant="outlined"
            sx={{
              color: "black",
              fontWeight: "bold",
              backgroundColor: "white",
              borderRadius: 2,
              padding: "10px 20px",
              fontSize: "1rem",
              textTransform: "none",
              marginRight: 2,
              border: "2px solid black",

              fontFamily: "monospace",
            }}
          >
            Top of Page
          </Button>
          <Button
            variant="contained"
            href="https://github.com/xtharshh/myportfolio"
            sx={{
              color: "white",
              backgroundColor: "black",
              borderRadius: 2,
              padding: "10px 20px",
              fontSize: "20px",
              textTransform: "none",
            }}
          >
            <FaGithub
              size={30}
              style={{
                marginRight: 10,
              }}
            />
            <span style={{ fontWeight: "bold", fontFamily: "monospace" }}>
              Github Repository
            </span>
          </Button>
        </div>
        <p
          className="copyright"
          style={{ fontWeight: "bold", fontFamily: "monospace" }}
        >
          &copy; {currentYear} Apexus. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
