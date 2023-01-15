import exampleImage from "./assets/bandc.jpeg";
import example2Image from "./assets/livingcafe.jpeg";
import wifiIcon from "./assets/wifi.png";
import powerIcon from "./assets/power.png";
import React, { useState, useEffect } from "react";
import data from "./data.js";



export default function Thumbnail(props) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://picsum.photos/300")
      .then((res) => setImageUrl(res.url))
      .then(console.log("run"));
  }, []);


  function handleClick (event) {
  
    const nameOfChosenCafe = event.target;
    const chosenCafe = data.find((item) => item.cafe_name === nameOfChosenCafe.getAttribute('alt') || nameOfChosenCafe.innerText === item.cafe_name);
    
    props.setCurrentCafe(chosenCafe)
    
  }

  
  return (
    
    <div className="cafe-thumbnail" onClick={handleClick}>
      {imageUrl && <img src={`${imageUrl}`} alt={props.name} />}
      <h1 className="cafe-name">{props.name}</h1>
      <p className="address">{props.address}</p>
      <div className="facilities">
        <img src={wifiIcon} alt="Wifi" />
        <img src={powerIcon} alt="Power Socket" />
      </div>
    </div>
  );
}
