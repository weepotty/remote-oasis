import { useState } from 'react';
import filterIcon from "./assets/filter.png";

export default function Filter() {
  const [filterOptions, setFilterOptions] = useState({ openNow: true, wifi: false, power: false});
const [isOpen, setIsOpen] = useState(false)

  const handleOptionChange = (event) => {
    const { name, checked } = event.target;
    setFilterOptions({ ...filterOptions, [name]: checked });
  }


  return (
    <div>
      <button className="filter-btn" onClick={() => setIsOpen(prevState=>!prevState)}>
          <img src={filterIcon} className="filter icon" alt="Filter" />
        </button>


        <form className={`filters ${isOpen ? 'visible' : ''}`}>
          <label for='openNow'>
            <input
              type="checkbox"
              name="openNow"
              id="openNow"
              checked={filterOptions.openNow}
              onChange={handleOptionChange}
            />
            Open now
          </label>
          <label for='wifi'>
            <input
              type="checkbox"
              name="wifi"
              id="wifi"
              checked={filterOptions.wifi}
              onChange={handleOptionChange}
            />
            Wifi
          </label>
          <label for='power'>
            <input
              type="checkbox"
              name="power"
              id="power"
              checked={filterOptions.power}
              onChange={handleOptionChange}
            />
            Power
          </label>
        </form>

    </div>
  );
}
