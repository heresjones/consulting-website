import Box from "@mui/material/Box"; // Import the icon
import icon1 from "../img/icon1aws.png";
import icon2 from "../img/icon2salesforce.png";
import icon3 from "../img/icon3python.png";
import icon4 from "../img/icon4react.png";
import icon5 from "../img/icon5terraform.png";
import icon6 from "../img/icon6gcp.png";
import icon7 from "../img/icon7nodejs.png";
import icon8 from "../img/icon8flutter.png";
import icon9 from "../img/icon9github.png";
import icon10 from "../img/icon10openai.png";

// Icons data structure
const icons = [
  { src: icon1, alt: "AWS logo" },
  { src: icon2, alt: "Salesforce Logo" },
  { src: icon3, alt: "Python Logo" },
  { src: icon4, alt: "React Logo" },
  { src: icon5, alt: "Terraform Logo" },
  { src: icon6, alt: "GCP Logo" },
  { src: icon7, alt: "Node Logo" },
  { src: icon8, alt: "Flutter Logo" },
  { src: icon9, alt: "Github Logo" },
  { src: icon10, alt: "Open AI Logo" },
];

const IconRow = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", sm: "row" },
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      gap: { xs: 2, sm: 3, md: 4 },
      mt: { xs: 5, sm: 10 },
      mb: { xs: 5, sm: 10 },
      px: { sm: 2, md: 4 },
    }}
  >
    {icons.map((icon, index) => (
      <img
        key={index}
        src={icon.src}
        alt={icon.alt}
        style={{ height: "70px", maxWidth: "200px" }}
      />
    ))}
  </Box>
);

export default IconRow;
