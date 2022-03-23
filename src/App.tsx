import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import mediaImg from "./assets/images/media.png";
import Posts from "./components/Posts";
import Form from "./components/Form";
import useStyles from "./styles";
function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Media
        </Typography>
        <img className={classes.image} src={mediaImg} alt="media" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
