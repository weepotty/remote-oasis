import wifiIcon from "./assets/wifi.png";
import powerIcon from "./assets/power.png";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


export default function Thumbnail(props) {
  // const [imageUrl, setImageUrl] = useState(null);

  // useEffect(() => {
  //   fetch("https://picsum.photos/300")
  //     .then((res) => setImageUrl(res.url))
  //     .then(console.log('fetch request'))
  // }, []);

  const styles={
    textDecoration: 'none'
  }

  console.log(props.img)

  return (
    <Link to={`${props.id}`} style={styles} className='cafes'>
    {/* <div className="cafe-thumbnail-section"> */}
     <img src={`${props.img}`} alt={props.name} />
      <h1 className="cafe-name">{props.name}</h1>
      <p className="address">{props.address}</p>
      <div className="facilities">
        <img src={wifiIcon} alt="Wifi" />
        <img src={powerIcon} alt="Power Socket" />
      </div>
    {/* </div> */}
    </Link>
  );
}
