import wifiIcon from "./assets/wifi.png";
import powerIcon from "./assets/power.png";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


export default function Thumbnail(props) {





  return (
    <Link to={`${props.id}`} style={{
      textDecoration: 'none'
    }} className='cafes'>

     {props.img? <img className='cafe-image' src={`${props.img}`} alt={props.name} /> : <img className='cafe-image' src="https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />}
      <h1 className="cafe-name">{props.name}</h1>
      <p className="address">{props.address}</p>
      <div className="facilities">
        <img src={wifiIcon} alt="Wifi" />
        <img src={powerIcon} alt="Power Socket" />
      </div>

    </Link>
  );
}
