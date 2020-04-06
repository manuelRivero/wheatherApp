import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Fab, Tooltip} from "@material-ui/core";


export default function WeatherListController(props) {

  const clickHandler = () => {
      props.showModal()
  };
  return (
    <div className="">
        <Tooltip title="Add new location!">
          <Fab color="primary" variant="extended" aria-label="add" onClick={clickHandler}>
        <LocationOnIcon/> NEW
      </Fab>
      </Tooltip>
      
    </div>
  );
}
