
import Thumbnail from "./Thumbnail.jsx"
import data from './data.js'
import Nav from "./Nav.jsx"
import Filter from "./Filter.jsx";

export default function Home() {


  const cards = data.map(item => {
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


      <nav className="nav-top">
        <a href="">
          <p className='underline'>Favourites</p>
        </a>
        <a href="">
          <p className='underline'>All</p>
        </a>
        <a href="">
          <p className='underline inactive'>New</p>
        </a>
        <a href="">
          <p className='underline inactive'>Recently Visited</p>
        </a>
      </nav>

      <section className='cafe-thumbnail-section'>
        {cards}
      </section>


      <Nav />

    </div>
  );
}
