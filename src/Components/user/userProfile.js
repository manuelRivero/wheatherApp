import React from "react";
import { Paper, Avatar, Card, CardActions,CardContent, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => {
  return {
    root: {
        
    },
    Header: {
      height: "100px",
      display: "flex",
      justifyContent: "center"
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    }
  };
});

export default function userProfile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.Header}>
        <Avatar
          alt="Remy Sharp"
          src="https://cdn5.vectorstock.com/i/1000x1000/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"
          className={classes.large}
        />
      </div>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
