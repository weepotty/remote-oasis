





export default function NavTop(props) {

  return ( <nav className="nav-top">
  <a>
    <p className='underline' onClick={props.handleLinkClick}>Favourites</p>
  </a>
  <a>
    <p className='underline' onClick={props.handleLinkClick}>All</p>
  </a>
  <a>
    <p className='underline inactive' onClick={props.handleLinkClick}>New</p>
  </a>
  <a>
    <p className='underline inactive' onClick={props.handleLinkClick}>Recently Visited</p>
  </a>
</nav>)


}
