import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function StartupAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h4">Strategic Growth Planning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            "Blueprinting Your Path to Success"
          </Typography>
          <Typography variant="body1">
            Embark on a discovery journey that lays out a clear, strategic path
            for your product release. We help you navigate the complexities of
            launching, ensuring your startup is positioned for growth and
            scalability.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h4">Team Building Excellence</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            "Assemble Your Dream Team"
          </Typography>
          <Typography variant="body1">
            Leverage our network to build a high-caliber team that's as
            passionate about your startup as you are. From technical experts to
            creative minds, we guide you in forming the foundation of your
            company's success.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h4">Partnership for Progress</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            "Investing in Your Future, Together"
          </Typography>
          <Typography variant="body1">
            Investors say you need a cofounder. We believe in the power of
            partnership. By working at a discount for a small fraction of
            ownership, we align our success with yours. It's not just
            consultancy; it's a commitment to your startup's future.
          </Typography>
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h4">Let's Build Together</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1">
            Ready to bring your vision to life? Connect with us today, and let's
            take the first step towards building something extraordinary
            together.
          </Typography>
          {/* <Button variant="contained" color="primary">
            Start Your Journey
          </Button> */}
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
}

export default StartupAccordion;
