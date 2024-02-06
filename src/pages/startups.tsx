import * as React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import mainBanner from "../img/startupbanner.webp";
import rocketShip from "../img/rocketship.png";
import StartupAccordion from "../components/startupAccordion";

const Startups = () => {
  return (
    <Box>
      {/* Banner Image Placeholder */}
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
      {/* Header 1 */}
      <Typography variant="h1">Empowering Startups</Typography>
      <Box sx={{ p: 2 }}>
        {/* Quote */}
        <Typography
          variant="h5"
          sx={{ fontStyle: "italic", textAlign: "center", my: 2 }}
        >
          "A startup offers the opportunity to create a new story, a narrative
          that's woven from the threads of vision, passion, and the relentless
          pursuit of something remarkable."
          <br />
          -Anynymous
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack on small screens, horizontal on medium and above
            alignItems: "center", // Align items vertically
            justifyContent: "flex-start", // Align items horizontally
            mb: 4,
          }}
        >
          {/* Image Container */}
          {/* Image Container */}
          <Paper
            sx={{
              backgroundColor: "grey.800",
              color: "#fff",
              height: 400,
              width: { md: "50%" },
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundImage: `url(${rocketShip})`,
              flexGrow: 1, // Allow it to grow as needed on smaller screens
            }}
          />
          {/* Text Container */}
          <Box
            sx={{
              p: 4, // Add padding
              width: { md: "50%" },
              flexGrow: 1, // Take half the width on medium and above screens
            }}
          >
            <Typography variant="h2">Accelerated MVP Development</Typography>
            <Typography variant="subtitle1">
              Our Commitment: Rapid Transformation from Idea to Prototype
            </Typography>
            <Typography variant="body1" align="left">
              Explore the heights your startup can reach with our bespoke MVP
              and proof of concept services. Unlike larger consultancies that
              may prioritize higher-paying clients and lack a personal touch, we
              pride ourselves on offering affordable, dedicated support. Our
              focus is on you—ensuring your ideas evolve into market-ready
              products swiftly and with the attention they deserve. As fellow
              entrepreneurs, we understand the importance of every detail.
            </Typography>
          </Box>
        </Box>
        <StartupAccordion />
      </Box>

      {/* Banner Image Placeholder 2 */}
      <Paper
        sx={{ height: 400, width: "100%", backgroundColor: "grey.300", mt: 2 }}
      />
    </Box>
  );
};

export default Startups;
