import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import LocationOnIcon from "@material-ui/icons/LocationOn";


//lista
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { CircularProgress } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// redux


const useStyles = makeStyles( theme => {
  return ({
    root:{
      textAlign:"center"
    },
    spinner:{
      padding:"1rem",
      margin:"1rem"
    }
  })
})

export default function SearchModal(props) {

  const classes = useStyles()
  const handleClose = () => {
    if(props.findValue){
      window.history.pushState("", "","/weather")
    }
    props.hide()
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
    props.hide()
  }
  
  return (
    
    <>
    
      <Dialog open={props.open} aria-labelledby="form-dialog-title" className={classes.root}>
        <DialogTitle id="form-dialog-title">New location</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            defaultValue={props.findValue ? props.findValue : ""}
            placeholder	=" ej. Buenos Aires"
            margin="dense"
            id="city"
            label="find"
            type="text"
            onChange={inputChangedHanler}
            fullWidth
          />
          {props.isLoading && <CircularProgress className={classes.spinner} />}
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
        </DialogActions>
      </Dialog>
    </>
  );
}
