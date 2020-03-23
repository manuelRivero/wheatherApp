import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

type props = {
  show: boolean,
  city: string | null,
  onSubmit: () => void;
  onCancel: () => void;
};
export default function weatherAlert({ show, city, onSubmit, onCancel }: props) {
  return (
    <div>
      <Dialog
        open={show}
        onClose={onCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to delete this location ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {city}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">
            Disagree
          </Button>
          <Button onClick={onSubmit} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
