import * as React from "react";
import { Box, Paper, Typography } from "@mui/material";
import mainBanner from "../img/aboutusbanner.png";

const About = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          height: 400,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${mainBanner})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // Align items at the start of the container's cross axis
          pt: 8, // Add some top padding
        }}
      ></Paper>
      <Typography variant="h2">About Us</Typography>
      <Box
        sx={{
          p: 2,
          maxWidth: "60ch",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "left",
        }}
      >
        <Typography variant="body1">
          We are a technical cloud consultancy company specializing in building
          robust, scalable solutions primarily on AWS, Azure, and GCP. Our
          expertise lies in leveraging the power of serverless architectures to
          deliver efficient, cost-effective solutions that scale effortlessly
          with your business needs.
        </Typography>
        <br />
        <Typography variant="body1">
          Our team is also proficient in frontend technologies, including React
          for web applications, and Flutter for mobile app development. We
          believe in creating seamless, engaging user experiences that perfectly
          complement the robust backend systems we build.
        </Typography>
        <br />
        <Typography variant="body1">
          Our mission is to empower businesses to reach their full potential
          through innovative technology solutions. We are committed to
          delivering excellence at every step of the way, from initial
          consultation to deployment and beyond. Let us help you transform your
          business and achieve your goals.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
