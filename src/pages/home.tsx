import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import mainBanner from "../img/banner12.png";
import { FaFlagUsa } from "react-icons/fa"; // Import the icon
import IconRow from "../components/companyicons";

interface HomeProps {
  banner: {
    image: string;
    title: string;
  };
}

const Home = (props: HomeProps) => {
  const { banner } = props;

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
        "Those who can imagine anything, can create the impossible."
        <br />
        -Alan Turing
      </Typography>
      <IconRow />
      <Grid
        container
        spacing={2}
        sx={{ px: { xs: 0, sm: 2 } }}
        style={{ display: "flex" }}
      >
        {/* {offerings.map((offering, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Offering offering={offering} />
          </Grid> */}
        {/* ))} */}
      </Grid>
    </Box>
  );
};

export default Home;
