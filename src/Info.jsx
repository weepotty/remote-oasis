import React, { useState } from "react";
import Thumbnail from "./Thumbnail.jsx";
import data from "./data.js";
import { useParams } from "react-router-dom";
import backArrow from "./assets/back-arrow.png";
import { Link, useNavigate } from "react-router-dom";

export default function Info() {

  const { cafeId } = useParams();


  const thisCafe = data.find((d) => d.id == cafeId);

  const navigate = useNavigate();
  const [isSlidingOut, setIsSlidingOut] = useState(false);

  function handleGoBack() {

    setIsSlidingOut(true)
      setTimeout(() => {
      navigate("/list");
  }, 300);

  }

  const styles = {
    animation: isSlidingOut? "slide-out 0.3s forwards" : "slide-in 0.3s"
  }


  return (
    <div className="info container">
      <div
        className="info card"
        style={styles}>
        <img
          src={backArrow}
          alt="Go Back"
          className="back-arrow"
          onClick={handleGoBack}
        />




<img src={thisCafe.image} className='info-image' alt={thisCafe.name} />

<h1 className="cafe-name">{thisCafe.cafe_name}</h1>
<p>{thisCafe.address}</p>

<p>icons go here</p>

<p>Tucked away in a lush green suburb etc. description of the cafe goes here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda, delectus, magni ad consequuntur illum beatae obcaecati odio veniam ipsum omnis porro quasi architecto!</p>

        <p>opening hours: {thisCafe.opening_time} - {thisCafe.closing_time}</p>
      </div>
    </div>
  );
}
