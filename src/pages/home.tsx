import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import mainBanner from "../img/banner12.png";
import { FaFlagUsa } from "react-icons/fa"; // Import the icon
import IconRow from "../components/companyicons";

interface OfferingProps {
  offering: {
    description: string;
    title: string;
    services: Array<string>;
  };
}

const Offering = (props: OfferingProps) => {
  const { offering } = props;

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        border: "1px solid grey.300",
        borderRadius: "borderRadius",
        mb: 2,
        height: "100%",
      }}
    >
      <Typography variant="h3" component="h3" align="center" gutterBottom>
        {offering.title}
      </Typography>
      <Typography variant="body2" align="center" gutterBottom>
        {offering.description}
      </Typography>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {offering.services.map((service, index) => (
          <li key={index} style={{ fontSize: "18px" }}>
            <Typography variant="body2" align="center">
              {service}
            </Typography>
            <br />
          </li>
        ))}
      </ul>
    </Paper>
  );
};

interface HomeProps {
  banner: {
    image: string;
    title: string;
  };
  offerings: Array<{
    description: string;
    title: string;
    services: Array<string>;
  }>;
}

const Home = (props: HomeProps) => {
  const { banner, offerings } = props;

  return (
    <Box>
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
      <Typography variant="h3">{banner.title}</Typography>
      <Typography
        variant="h5"
        sx={{ fontStyle: "italic", textAlign: "center", my: 2 }}
      >
        "Driving the future of cloud innovation, we harness the power of the
        cloud to transform your pioneering ideas into scalable, leading-edge
        solutions."
        <br />
        -Anynymous
      </Typography>
      <IconRow />
      <Grid
        container
        spacing={2}
        sx={{ px: { xs: 0, sm: 2 } }}
        style={{ display: "flex" }}
      >
        {offerings.map((offering, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Offering offering={offering} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
