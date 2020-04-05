import React from 'react';
import {Snackbar} from '@material-ui/core';
import {connect} from "react-redux"

function snackbar({show, message}) {

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={show}
        message={message}
      />
    </div>
  );
}

const mapStateTopProps = ({userReducer}) => {
  return ({
    show: userReducer.snackbar.message,
    message : userReducer.snackbar.message
  })
}

export default connect(mapStateTopProps,null)(snackbar)