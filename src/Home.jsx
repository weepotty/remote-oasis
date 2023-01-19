import NavBottom from "./NavBottom.jsx"
import Filter from "./Filter.jsx";
import Cafes from "./Cafes.jsx";
import data from './data.js'
import Thumbnail from "./Thumbnail.jsx";
import NavTop from './NavTop.jsx'
import { useState } from "react";

export default function Home () {

  const allCafes = data.map(item => {
    return (
        <Thumbnail
            key={item.id}
            id={item.id}
            img={item.image}
            address={item.address}
            openingHours={`${item.opening_time} - ${item.closing_time}`}
        name={item.cafe_name}
            price={item.coffee_price}
            contact={item.phone}

        />
    )
})


const favourites = data.filter(item => item.favourite).map(item => {
  return (
      <Thumbnail
          key={item.id}
          id={item.id}
          img={item.image}
          address={item.address}
          openingHours={`${item.opening_time} - ${item.closing_time}`}
      name={item.cafe_name}
          price={item.coffee_price}
          contact={item.phone}

      />
  )
})




const newCafes = data.filter(item => item.new).map(item => {
  return (
      <Thumbnail
          key={item.id}
          id={item.id}
          img={item.image}
          address={item.address}
          openingHours={`${item.opening_time} - ${item.closing_time}`}
      name={item.cafe_name}
          price={item.coffee_price}
          contact={item.phone}

      />
  )
})

const recentlyVisitedCafes = data.filter(item => item.recently_visited).map(item => {
  return (
      <Thumbnail
          key={item.id}
          id={item.id}
          img={item.image}
          address={item.address}
          openingHours={`${item.opening_time} - ${item.closing_time}`}
      name={item.cafe_name}
          price={item.coffee_price}
          contact={item.phone}

      />
  )
})


const [activeLink, setActiveLink] = useState("all")

function handleLinkClick(event) {
  const link = event.target.innerText || event.target.alt

  setActiveLink(link)
}



let cafesToRender
switch (activeLink) {
  case 'Favourites':
    cafesToRender = favourites;
    break;
  case 'New':
    cafesToRender = newCafes;
    break;
  case 'Recently Visited':
  cafesToRender = recentlyVisitedCafes;
  break;

  default:
    cafesToRender = allCafes;
}

  return (
    <div className="home container">
      <section className="current-location">
        <p>You are here</p>
        <h1 className="area-name">Bukit Timah</h1>
      </section>

      <section className="search-container">
        <input id="search-bar" type="text" placeholder="Enter location" />
        <Filter />
      </section>


      <NavTop handleLinkClick={handleLinkClick} />

<Cafes> {cafesToRender}</Cafes>





      <NavBottom handleLinkClick={handleLinkClick}/>

    </div>
  );
}
