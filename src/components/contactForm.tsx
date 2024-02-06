import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { TextField, Button, Grid, Typography, Container } from "@mui/material";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqyalyj");
  if (state.succeeded) {
    return <Typography>Thanks for joining!</Typography>;
  }
  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="outlined"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="message"
              label="Message"
              type="text"
              id="message"
              multiline
              rows={4}
              variant="outlined"
              inputProps={{
                style: {
                  resize: "vertical",
                  overflow: "auto",
                },
              }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Grid>
          <Grid
            item
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={state.submitting}
              sx={{ width: "fit-content", px: 4 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ContactForm;
