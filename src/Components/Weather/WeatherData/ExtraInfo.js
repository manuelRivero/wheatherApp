import React from 'react'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles( theme => {
    return ({
    extraInfo:{
      flexGrow:"1",
      color:"blue",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }
    }
    )
  })
export default ({humidity: h, wind: w}) => {
   const classes = useStyles()
  
  return (
    <div className={classes.extraInfo}>
      <span>{`Humidity: ${h}%`}</span>
      <span>{`Wind: ${w}`}</span>
    </div>
  )
}


