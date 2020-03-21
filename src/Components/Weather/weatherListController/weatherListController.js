import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Fab } from "@material-ui/core";


export default function WeatherListController(props) {

  const clickHandler = () => {
      props.showModal()
  };
  return (
    <div className="">
      <Fab color="primary" variant="extended" aria-label="add" onClick={clickHandler}>
        <LocationOnIcon/> NEW
      </Fab>
    </div>
  );
}
