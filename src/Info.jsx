import React, { useState } from "react";
import Thumbnail from "./Thumbnail.jsx";
import data from "./data.js";
import { useParams } from "react-router-dom";
import backArrow from "./assets/back-arrow.png";
import { Link, useNavigate } from "react-router-dom";

export default function Info(props) {

  const { cafeId } = useParams();

  const thisCafe = props.cafeData.find((d) => d.id == cafeId);

  const navigate = useNavigate();
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [isSlidingIn, setIsSlidingIn] = useState(true);


  const infoClass = isSlidingIn ? "come-in" : "";

  function handleGoBack() {
    setIsSlidingIn(false)
    setIsSlidingOut(true)
      setTimeout(() => {
      navigate("/list");
  }, 300);

  }


  const styles = {
    animation: isSlidingOut && "slide-out 0.2s forwards"
  }



  return (
    // <div className="info container">
    <div className={`info container ${infoClass}`} style={styles}>
      {/* <div
        className="info card"
        style={styles}> */}
  <div className="info card">
        <img
          src={backArrow}
          alt="Go Back"
          className="back-arrow"
          onClick={handleGoBack}
        />

{thisCafe.image?


<img src={thisCafe.image} className="info-image" alt={thisCafe.name} />
: <img className="info-image" src="https://images.unsplash.com/photo-1636654129379-e7ae6f30bfd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29taW5nJTIwc29vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" />
}

  <h1 className="cafe-name">{thisCafe.cafe_name}</h1>
  <p>{thisCafe.address}</p>

  <p>icons container</p>

  <p>Tucked away in a lush green suburb etc. description of the cafe goes here. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda, delectus, magni ad consequuntur illum beatae obcaecati odio veniam ipsum omnis porro quasi architecto!</p>

          <p>opening hours: {thisCafe.opening_time} - {thisCafe.closing_time}</p>




      </div>
    </div>
  );
}
