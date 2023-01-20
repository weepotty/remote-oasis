import wifiIcon from "./assets/wifi.png";
import powerIcon from "./assets/power.png";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


export default function Thumbnail(props) {





  return (
    <Link to={`${props.id}`} style={{
      textDecoration: 'none'
    }} className='cafes'>

     <img src={`${props.img}`} alt={props.name} />
      <h1 className="cafe-name">{props.name}</h1>
      <p className="address">{props.address}</p>
      <div className="facilities">
        <img src={wifiIcon} alt="Wifi" />
        <img src={powerIcon} alt="Power Socket" />
      </div>

    </Link>
  );
}
