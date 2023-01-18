
import homeIcon from "/home.png";
import heartIcon from "/heart.png";
import compassIcon from "/compass.png";
import addIcon from "/add.png";
import {Link, useNavigate } from "react-router-dom";


export default function Nav() {

return(
  <nav className="nav-bottom">

  <Link to='/list'>
    <img src={homeIcon} className="nav-icon" alt="Home" />
  </Link>
  <a href="">
    <img src={heartIcon} className="nav-icon" alt="Favourites" />
  </a>
  <a href="">
    <img src={compassIcon} className="nav-icon" alt="Near Me" />
  </a>
  <a href="">
    <img src={addIcon} className="nav-icon" alt="Add New" />
  </a>
</nav>)
}
