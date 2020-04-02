import React from "react";
import { Paper, IconButton, Grid, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useLocation, useHistory, Redirect } from "react-router";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: "100%",
      padding: "2rem"
    },
    actions: {
      textAlign: "left"
    },
    message:{
        textAlign: "center"
    }
  };
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function forecastPlaceholder() {
  const classes = useStyles();
  const query = useQuery().get("find");
  let history = useHistory()

  let placeHolder = <Redirect to="weather"/>

  
  const onFind = () => {
    console.log("click")
    history.push(`/weather?find=${query}`);
  };

  const onBack = () => {
    history.push("/weather");
  };


  if (query) {
    placeHolder = (
      <div className={classes.message}>
        <h1> Do you like to find "{query}" ?</h1>
        <Button variant="contained" color="primary" onClick={onFind}>Find it !</Button>
      </div>
    );
  }

  return (
    <Grid item sm={12} md={8}>
      <Paper className={classes.root}>
        <div className={classes.actions}>
          <IconButton onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        {placeHolder}
      </Paper>
    </Grid>
  );
}
