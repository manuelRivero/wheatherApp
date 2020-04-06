import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import { Grid, Paper, TextField, Typography, Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import firebaseApp from "../../firebase/firebaseConfi";

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      padding: "1rem",
      textAlign: "center",
      minHeight: "300px"
    },
    alert:{
      marginTop:"1rem",
      padding:"1rem",
      backgroundColor:"#fef6dd",
      color:"#968754",
      borderRadius:"3px"
    },
    form:{
      margin: "2rem 0"
    },
    btn:{
      margin: "2rem 0"
    }
  };
});

export default function Login() {
  let history = useHistory();
  const classes = useStyles();
  const [form, setform] = useState({
    email: { value: "" },
    password: { value: "" },
  });

  const [error, setError] = useState(null);

  const inputChangedHanler = (e) => {
    let newInputValue = { ...form[e.target.name] };
    newInputValue.value = e.target.value;
    setform({ ...form, [e.target.name]: newInputValue });
    console.log(form);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(false)
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(form.email.value, form.password.value)
      .then((res) => history.push("/"))
      .catch((err) => setError(err.message));
  };
  return (
    <Grid item xs={12} md={6}>
      <Paper className={classes.paper}>
        <Typography variant="h4" >Log in</Typography>
        <form onSubmit={submitHandler} className={classes.form}>
          <TextField
            autoFocus
            placeholder="example@example.com"
            margin="dense"
            id="email"
            name="email"
            label="email"
            type="email"
            onChange={inputChangedHanler}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            id="password"
            label="password"
            type="password"
            name="password"
            onChange={inputChangedHanler}
            fullWidth
          />
          <Button className={classes.btn} type="submit" variant="contained" color="primary">
            Log In!
          </Button>
        </form>
        
        {error && <div className={classes.alert}>
          {error}
          </div>}
      </Paper>
    </Grid>
  );
}
