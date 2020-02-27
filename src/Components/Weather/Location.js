import React from 'react'
//css
import './style.css';

export default ({city}) => {
  return (
    <div className="locationCont">
     <h1>{`${city}`}</h1> 
    </div>
  )
}
