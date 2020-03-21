import React from "react";
import PropTypes from "prop-types";
import ForescastItem from "../ForecastItem/ForecastItem";
import { CircularProgress } from "@material-ui/core";

const ForecastExtended = ({ city, forecastExtendedData }) => {
  let forecast = <CircularProgress />;

  if (forecastExtendedData && forecastExtendedData[city]) {
    forecast = forecastExtendedData[city].map((day, index) => (
      <ForescastItem
        weekDay={day.weekDay}
        hour={day.hour}
        data={day.data}
        key={index}
      ></ForescastItem>
    ));
  }

  return (
    <div className="forecastExtendedCont">
      {city && <h1>{city}</h1>}
      {forecast}
    </div>
  );
};
ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForecastExtended;
