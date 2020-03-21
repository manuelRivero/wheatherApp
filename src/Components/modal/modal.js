import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from '@material-ui/icons/Add';
import LocationOnIcon from "@material-ui/icons/LocationOn";


//lista


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { CircularProgress, Fab } from "@material-ui/core/";

// redux

import * as actions from "./../../actions/index";

export default function SearchModal(props) {
  const handleClose = () => {
    console.log("close");
  };
  const inputChangedHanler = event => {
    let value = event.target.value;
    if (value.trim().length < 3) {
      return null;
    }
    setTimeout(() => {
      props.searchCity(value);
    }, 200);
  };

  const clickHandler = (index) => {
    props.addCity(props.searchResults[index])
  }
  return (
    <>
    {console.log(props.searchResults)}
      <Dialog open={props.open} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New location</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="city"
            label="find"
            type="text"
            onChange={inputChangedHanler}
            fullWidth
          />
          {props.isLoading && <CircularProgress />}
          {props.searchResults && (
            <List component="nav" aria-label="main mailbox folders">
              {props.searchResults.map((result, index) => {
                return (
                  <ListItem button onClick={() =>clickHandler(index)} key={result+index}>
                    <ListItemIcon>
                    <LocationOnIcon/>
                    </ListItemIcon>
                    <ListItemText primary={result} />
                  </ListItem>
                );
              })}
            </List>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Fab color="primary" onClick={handleClose} aria-label="add">
            <AddIcon />
          </Fab>
        </DialogActions>
      </Dialog>
    </>
  );
}
