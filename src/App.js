import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./App.css";

import Comments from "./components/comments/Comments";
import { CssBaseline, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  spacing: {
    marginTop: "50px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <CssBaseline>
      <Container>
        <Grid
          container
          justify="space-between"
          className={classes.spacing}
        ></Grid>

        <Comments />
      </Container>
    </CssBaseline>
  );
}

export default App;
