import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Fab } from "@material-ui/core";


export default function WeatherListController() {

  const clickHandler = () => {
      console.log("click")
  };
  return (
    <div className="">
      <Fab color="primary" variant="extended" aria-label="add" onClick={clickHandler}>
        <LocationOnIcon/> NEW
      </Fab>
    </div>
  );
}
