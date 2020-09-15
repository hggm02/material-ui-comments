import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./App.css";

import Comments from "./components/Comments";
import { CssBaseline, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  spacing: {
    marginTop: "50px",
  },
  header: {
    marginTop: "px",
    fontWeight: 600,
  },
  button: {
    color: "orange",
  },
});

function App() {
  const classes = useStyles();

  return (
    <CssBaseline>
      <Container>
        <Grid container justify="space-between" className={classes.spacing}>
          <Grid item>
            <Typography className={classes.header} variant="h4" gutterBottom>
              Comments
            </Typography>
          </Grid>
        </Grid>

        <Comments />
      </Container>
    </CssBaseline>
  );
}

export default App;
