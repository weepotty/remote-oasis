import homeIcon from "./assets/home.png";
import heartIcon from "./assets/heart.png";
import compassIcon from "./assets/compass.png";
import addIcon from "./assets/add.png";
import filterIcon from "./assets/filter.png";
import exampleImage from "./assets/bandc.jpeg";
import example2Image from "./assets/livingcafe.jpeg";
import wifiIcon from "./assets/wifi.png";
import powerIcon from "./assets/power.png";

export default function Home() {
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
          <p>Favourites</p>
        </a>
        <a href="">
          <p>Browse All</p>
        </a>
        <a href="">
          <p>New</p>
        </a>
        <a href="">
          <p>Recently Visited</p>
        </a>
      </nav>

      <section className="cafe-card-section">
        <div className="cafe-card">
          <img src={exampleImage} alt="Baker and Cook" />
          <h1 className="cafe-name">Baker and Cook (Hillcrest) </h1>
          <div className="facilities">
            <img src={wifiIcon} alt="Wifi" />
            <img src={powerIcon} alt="Power Socket" />
          </div>
        </div>

        <div className="cafe-card">
          <img src={example2Image} alt="The Living Cafe" />
          <h1 className="cafe-name">The Living Cafe</h1>

          <div className="facilities">
            <img src={wifiIcon} alt="Wifi" />
            <img src={powerIcon} alt="Power Socket" />
          </div>
        </div>
      </section>

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
