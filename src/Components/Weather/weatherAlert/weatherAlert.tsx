import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function weatherAlert(props) {

    return (
        
    <div>
    <Dialog
      open={props.show}
      onClose={props.onCancel}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        Are you sure to delete this item ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onCancel} color="primary">
          Disagree
        </Button>
        <Button onClick={props.onSubmit} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  </div>
    )
}
