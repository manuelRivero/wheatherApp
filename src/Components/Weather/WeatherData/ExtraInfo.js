import React from 'react'
import './style.css';
export default ({humidity: h, wind: w}) => {
   
  return (
    <div className="extraInfoCont">
      <span>{`Humidity: ${h}%`}</span>
      <span>{`Wind: ${w}`}</span>
    </div>
  )
}


