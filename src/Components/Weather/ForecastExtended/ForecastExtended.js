import React from "react";
import PropTypes from "prop-types";
import ForescastItem from "../ForecastItem/ForecastItem";
import {
  CircularProgress,
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => {
  return {
    paper: {
      padding: "1rem",
      textAlign: "center"
    },
    expansionPanelDetail:{
      flexDirection:'column',
      maxHeight:'200px',
      overflow:'scroll'
    }
  };
});

const ForecastExtended = ({ city, forecastExtendedData }) => {
  const classes = useStyles();
  let forecast = <CircularProgress />;

  if (forecastExtendedData && forecastExtendedData[0] === city) {

    // it's an object
    let forecastGroups = forecastExtendedData[1].reduce((weekDay, a) => {
      weekDay[a.weekDay] = [...(weekDay[a.weekDay] || []), a];
      return weekDay;
    }, {});

    // converting into an array of groups objects
    let groupArray=[]
    for(let group in forecastGroups){
      groupArray.push({[group]:forecastGroups[group]})
    } 

    forecast= groupArray.map((dayGroup, groupIndex) => {
      let dayGroupName;
      for(let name in dayGroup){
        dayGroupName=name
      }
      return (
        <ExpansionPanel key={dayGroupName + groupIndex}>
            <ExpansionPanelSummary
              key={dayGroupName+groupIndex}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={dayGroupName}
              id={dayGroupName}
            >
                <Typography>{dayGroupName}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.expansionPanelDetail}>
              {dayGroup[dayGroupName].map( (day, index)=>{
                return(
                  <ForescastItem
                  weekDay={day.weekDay}
                  hour={day.hour}
                  data={day.data}
                  key={day+index}
                ></ForescastItem>
                )
              })}
            </ExpansionPanelDetails>
        </ExpansionPanel>
        )
    });
   }

  return (
    <Grid item sm={12} md={6}>
      <Paper className={classes.paper}>
        <h1>{city}</h1>
        {forecast && 
          forecast
          }
      </Paper>
    </Grid>
  );
};

export default ForecastExtended;
