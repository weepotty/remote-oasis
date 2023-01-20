import homeIcon from "/home.png";
import heartIcon from "/heart.png";
import compassIcon from "/compass.png";
import addIcon from "/add.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavBottom(props) {
  return (
    <nav className="nav-bottom">
      <img
        src={homeIcon}
        className="nav-icon"
        alt="Home"
        onClick={props.handleLinkClick}
      />

      <img
        src={heartIcon}
        onClick={props.handleLinkClick}
        className="nav-icon"
        alt="Favourites"
      />

      <img src={compassIcon} className="nav-icon" alt="Near Me" />

      <Link to="/add">
        <img src={addIcon} className="nav-icon" alt="Add New" />
      </Link>
    </nav>
  );
}
