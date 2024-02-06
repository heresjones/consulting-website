import ContactForm from "../components/contactForm";
import * as React from "react";
import { Box, Typography, Button, Paper, Container } from "@mui/material";
import mainBanner from "../img/startupbanner.webp";
import rocketShip from "../img/rocketship.png";
import StartupAccordion from "../components/startupAccordion";
import contactBanner from "../img/contactbanner.webp";

const Contact = () => {
  return (
    <Box sx={{ paddingBottom: 4 }}>
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
          backgroundImage: `url(${contactBanner})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // Align items at the start of the container's cross axis
          pt: 8, // Add some top padding
        }}
      ></Paper>
      {/* Header 1 */}
      <Typography variant="h1">Contact Us</Typography>
      <Box sx={{ p: 2 }}>
        {/* Quote */}
        {/* <Typography
          variant="h5"
          sx={{ fontStyle: "italic", textAlign: "center", my: 2 }}
        >
          Whether you have a question, a project idea, or need expert advice, we
          are ready to listen and provide you with the solutions you need.
        </Typography> */}
      </Box>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
          {/* <Typography variant="h6" gutterBottom>
            Why Contact Us?
          </Typography> */}
          <Typography variant="body1" paragraph>
            <strong>Expert Guidance:</strong> Leverage our industry expertise to
            steer your project in the right direction.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Custom Solutions:</strong> Discuss your specific needs and
            let us tailor our services to match your goals.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Partnership Opportunities:</strong> Explore how we can
            collaborate for mutual growth and success.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Feedback & Support:</strong> Have questions or need support?
            We're here to provide the answers and assistance you need.
          </Typography>
          <Typography variant="body1">
            Our commitment is to respond to all inquiries promptly and
            thoughtfully. We value your time and interest in connecting with us
            and look forward to hearing from you.
          </Typography>
        </Paper>
        <ContactForm></ContactForm>
      </Container>
      {/* Banner Image Placeholder 2 */}
      {/* <Paper
        sx={{ height: 400, width: "100%", backgroundColor: "grey.300", mt: 2 }}
      /> */}
    </Box>
  );
};

export default Contact;
