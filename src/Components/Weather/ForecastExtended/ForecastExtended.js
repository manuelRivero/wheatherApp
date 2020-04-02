import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ForescastItem from "../ForecastItem/ForecastItem";
import {useHistory} from "react-router-dom"
import {
  CircularProgress,
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  IconButton
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    paper: {
      padding: "1rem",
      textAlign: "center"
    },
    expansionPanelDetail: {
      flexDirection: "column"
    },
    actions:{
      textAlign:"left"
    }
  };
});

const ForecastExtended = ({ city, forecastExtendedData }) => {
  const classes = useStyles();
  let history = useHistory();
  let forecast = <CircularProgress />;

  const onBack = () => {
    history.push("/weather")
  };

  if (forecastExtendedData && forecastExtendedData[0] === city) {
    // it's an object
    let forecastGroups = forecastExtendedData[1].reduce((weekDay, a) => {
      weekDay[a.weekDay] = [...(weekDay[a.weekDay] || []), a];
      return weekDay;
    }, {});

    // converting into an array of groups objects
    let groupArray = [];
    for (let group in forecastGroups) {
      groupArray.push({ [group]: forecastGroups[group] });
    }

    forecast = groupArray.map((dayGroup, groupIndex) => {
      let dayGroupName;
      for (let name in dayGroup) {
        dayGroupName = name;
      }
      return (
        <ExpansionPanel key={dayGroupName + groupIndex}>
          <ExpansionPanelSummary
            key={dayGroupName + groupIndex}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={dayGroupName}
            id={dayGroupName}
          >
            <Typography>{dayGroupName}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.expansionPanelDetail}>
            {dayGroup[dayGroupName].map((day, index) => {
              return (
                <ForescastItem
                  weekDay={day.weekDay}
                  hour={day.hour}
                  data={day.data}
                  key={day + index}
                ></ForescastItem>
              );
            })}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  }

  return (
    <Grid item sm={12} md={6}>
      <Paper className={classes.paper}>
        <div className={classes.actions}>
          <IconButton onClick={onBack}>
            <ArrowBackIcon />
          </IconButton>
        </div>
        <h1>{city}</h1>
        {forecast && forecast}
      </Paper>
    </Grid>
  );
};

export default ForecastExtended;
