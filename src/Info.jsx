import React from "react";
import Thumbnail from "./Thumbnail.jsx";

export default function Info(props) {
    
  function goBack() {
    props.toggleShowCard()
  }

  const styles = {
    animation: props.showCard? "slide-in 0.3s forwards" : "slide-out 0.3s forwards"
    }
    
  return (
    
    <div className="info card" id="info-card" style={styles}>
      <img src="./src/assets/back-arrow.png" alt="Back" className="back-arrow" onClick={goBack}/>

      <Thumbnail
        key={props.id}
        // img={chosenCafe.imageUrl}
        address={props.address}
        openingHours={props.openingHours}
        name={props.name}
        price={props.price}
        contact={props.contact}
        
      />

      
    </div>
  );
}
