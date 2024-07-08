import * as React from "react";
import { useRef } from "react";
import { Grid, Container, Typography, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Advokids from "../assets/advo-kids.png";
import Enterprise from "../assets/enterprise.png";
import Weather from "../assets/weather.png";
import Another from "../assets/Frame.png";
import "../styles/projects.css";

const projects = [
  {
    title: "ADVO-KIDS",
    subtitle:
      "A Gamified platform for the kids, and made this project in the Smart India Hackathon 2k23",
    image: Advokids,
    link: "https://advo-kids.vercel.app/", // Add the live link here
  },
  {
    title: "Enterprise Level Food Ordering Website",
    subtitle: "React, Vite & shadcn Based",
    image: Enterprise,
    link: "https://example.com/enterprise", // Add the live link here
  },
  {
    title: "Weather App",
    subtitle: "React Based Weather Application",
    image: Weather,
    link: "https://example.com/weather", // Add the live link here
  },
  {
    title: "another one",
    subtitle: "soon",
    image: Another,
    link: "https://example.com/weather", // Add the live link here
  },
];

export default function MediaCard() {
  const projectsRef = useRef();

  return (
    <div className="mobile" ref={projectsRef} style={{}}>
      <Container maxWidth="lg" sx={{ py: 10 }}>
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
          Go Through
        </span>
        <header
          variant="h2"
          align="center"
          gutterBottom
          className="project-head"
        >
          Projects
        </header>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Card
                className="zoom"
                sx={{
                  width: "100%",
                  height: "100%",
                  border: "2px solid black",
                  borderRadius: "5px",
                }}
              >
                <CardMedia
                  sx={{
                    height: 140,
                    backgroundImage: `url(${project.image})`, // Add this line
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontFamily: "monospace" }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ fontFamily: "monospace" }}
                  >
                    {project.subtitle}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" style={{ fontFamily: "monospace" }}>
                    Demo
                  </Button>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="small" style={{ fontFamily: "monospace" }}>
                      Live
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
