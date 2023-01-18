import { useState } from 'react';
import filterIcon from "./assets/filter.png";

export default function Filter() {
  const [filterOptions, setFilterOptions] = useState({ option1: false, option2: false });
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

      {isOpen && (
        <form>
          <label>
            <input
              type="checkbox"
              name="option1"
              checked={filterOptions.option1}
              onChange={handleOptionChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="checkbox"
              name="option2"
              checked={filterOptions.option2}
              onChange={handleOptionChange}
            />
            Option 2
          </label>
        </form>
      )}
    </div>
  );
}
