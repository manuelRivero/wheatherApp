import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import firebaseApp from "../../firebase/firebaseConfi";

import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ isAuth }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    firebaseApp
      .auth()
      .signOut()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    handleClose();
  };

  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WeatherApp
          </Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Menu
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {isAuth ? (
              <React.Fragment>
                <MenuItem>
                  <Link to="/user/profile">Profile</Link>
                </MenuItem>
                <MenuItem onClick={logOut}>Log Out</MenuItem>
              </React.Fragment>
            ) : (
              <MenuItem >
                <Link to="/user/login">Log in</Link>
              </MenuItem>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

const mapStateToProps = ({ userReducer }) => {
  return {
    isAuth: userReducer.user !== null,
  };
};
export default connect(mapStateToProps, null)(Header);
