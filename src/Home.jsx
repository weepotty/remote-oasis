import React, { useEffect, useState } from "react";
import homeIcon from "./assets/home.png";
import heartIcon from "./assets/heart.png";
import compassIcon from "./assets/compass.png";
import addIcon from "./assets/add.png";
import filterIcon from "./assets/filter.png";
import Thumbnail from "./Thumbnail.jsx"
import data from './data.js'
import Info from "./Info";

export default function Home() {
  const [showCard, setShowCard] = useState(false)
  const [currentCafe, setCurrentCafe] = useState('');


function toggleShowCard() {
  
  setShowCard(prevState => !prevState)
  
}

  const cards = data.map(item => {
    return (
        <Thumbnail
            key={item.id}
            // img={item.imageUrl}
            address={item.address}
            openingHours={`${item.opening_time} - ${item.closing_time}`}
        name={item.cafe_name}
            price={item.coffee_price}
            contact={item.phone}
            setCurrentCafe={setCurrentCafe}
            
            
            
        />
    )
})        


  
  return (
    <div className="home container">
      <section className="current-location">
        <p>You are here</p>
        <h1 className="area-name">Bukit Timah</h1>
      </section>

      <section className="search-container">
        <input id="search-bar" type="text" placeholder="Enter location" />
        <button className="filter-btn">
          <img src={filterIcon} className="filter icon" alt="Filter" />
        </button>
      </section>
      <nav className="nav-top">
        <a href="">
          <p className='underline'>Favourites</p>
        </a>
        <a href="">
          <p className='underline'>All</p>
        </a>
        <a href="">
          <p className='underline'>New</p>
        </a>
        <a href="">
          <p className='underline'>Recently Visited</p>
        </a>
      </nav>

      <section className="cafe-thumbnail-section" onClick={toggleShowCard}>
        {cards}
      </section>

       {currentCafe && 
       
       
       
       <Info
      
      
      key={currentCafe.id}
      // img={chosenCafe.imageUrl}
      address={currentCafe.address}
      openingHours={`${currentCafe.opening_time} - ${currentCafe.closing_time}`}
      name={currentCafe.cafe_name}
      price={currentCafe.coffee_price}
      contact={currentCafe.phone}
      showCard={showCard}
      toggleShowCard={toggleShowCard}
      />
      
      
      }

      <nav className="nav-bottom">
        <a href="">
          <img src={homeIcon} className="nav-icon" alt="Home" />
        </a>
        <a href="">
          <img src={heartIcon} className="nav-icon" alt="Favourites" />
        </a>
        <a href="">
          <img src={compassIcon} className="nav-icon" alt="Near Me" />
        </a>
        <a href="">
          <img src={addIcon} className="nav-icon" alt="Add New" />
        </a>
      </nav>
    </div>
  );
}
