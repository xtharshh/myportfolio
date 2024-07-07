import React, { useRef } from "react";
import { Button } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import bgimage from "../assets/Untitledsetttt.png";
import "../styles/contacts.css";
const Contact = () => {
  const contactRef = useRef();
  try {
    return (
      <>
        <div
          ref={contactRef}
          className="contact-contain"
          style={{
            backgroundImage: `url(${bgimage})`, // Add this line
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "auto",
            height: "auto", // Set the height to 100vh to cover the entire screen
            border: "2px solid #f51111",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(255, 0, 0, 0.1)",
            margin: "15px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          <header>
            <span
              style={{
                fontFamily: "monospace",
                color: "grey",
                fontSize: "24px",
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              Say Hi!
            </span>
            <h1 className="contact-head" style={{ textAlign: "center" }}>
              Contacts
            </h1>
          </header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              {
                href: "https://www.discord.com/xt.harshh",
                username: "xt.harshh",
                icon: (
                  <SocialIcon
                    fgColor="black"
                    bgColor="transparent"
                    url="https://discord.com"
                  />
                ),
              },
              {
                href: "https://www.x.com/xtharshhh",
                username: "xtharshhh",
                icon: (
                  <SocialIcon
                    fgColor="black"
                    bgColor="transparent"
                    url="https://x.com"
                  />
                ),
              },
              {
                href: "https://www.instagram.com/xt.harshh",
                username: "xt.harshh",
                icon: (
                  <SocialIcon
                    fgColor="black"
                    bgColor="transparent"
                    url="https://instagram.com"
                  />
                ),
              },
              {
                href: "https://www.linkedin.com/in/xtharshh",
                username: "xtharshh",
                icon: (
                  <SocialIcon
                    fgColor="black"
                    bgColor="transparent"
                    url="https://linkedin.com"
                  />
                ),
              },
              {
                href: "https://mail.google.com/mail/u/0/?to=inbox@example.com&bcc=admin@example.com&subject=Hey#inbox?compose=CllgCJZczwGPZsmqgpPRKXvxFRZwZlJPpqsTwPQfJvwPNBwPWkgXSbvbzwKbzbMkCqMLQbPZsJB",
                username: "xtharshh@gmail.com",
                icon: (
                  <SocialIcon
                    network="email"
                    fgColor="black"
                    bgColor="transparent"
                  />
                ),
              },
              {
                href: "https://www.github.com/xtharshh",
                username: "xtharshh",
                icon: (
                  <SocialIcon
                    fgColor="black"
                    bgColor="transparent"
                    url="https://github.com"
                  />
                ),
              },
            ].map((item, index) => (
              <Button
                className="button-contact zoom"
                key={index}
                variant="outlined"
                color="primary"
                size="large"
                style={{
                  fontFamily: "monospace",
                  borderRadius: "50px",
                  marginLeft: "10%",
                  marginRight: "10%",
                  marginBottom: "1rem",

                  borderColor: "black", // Add this line to set the button border color to black
                }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
                <span
                  style={{
                    fontWeight: "bold",
                    fontFamily: "monospace",
                    color: "black",
                    fontSize: "20px",
                  }}
                >
                  {item.username}
                </span>{" "}
                {/* Set the text to bold and change the font */}
              </Button>
            ))}
          </div>
        </div>
      </>
    );
  } catch (err) {
    console.error("Error rendering Contact component:", err);
    return <div>Error: {err.message}</div>;
  }
};

export default Contact;
