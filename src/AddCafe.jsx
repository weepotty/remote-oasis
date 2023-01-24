import React, {useState, useEffect} from 'react'

import { Link, Navigate, useNavigate} from 'react-router-dom'

export default function AddCafe (props) {

const navigate = useNavigate()

function navigateHome () {
  setTimeout(() => {
    navigate('/list')
  }, 100);

}




return(
<div className='container home'>
<h1>Found a new place?</h1>
  <form className='add-cafe' name="add-cafe" onSubmit={props.handleSubmit} method="POST" data-netlify="true">
  <p>
    <label htmlFor="cafe_name">Name of Cafe: </label>
    <input type="text" onChange={props.handleChange} name="cafe_name" id="cafe_name" value={props.formData.cafe_name} />
  </p>



 <p>
    <label htmlFor="area">Area: </label>

              <select
                  id="area"
                  value={props.formData.area}
                  onChange={props.handleChange}
                  name="area"
              ><option value="">Choose an area</option>
                  <option value="Bukit Timah">Bukit Timah</option>
                  <option value="Holland Village">Holland Village</option>
                  <option value="CBD">CBD</option>
                  <option value="Dempsey">Dempsey</option>
                  <option value="Orchard">Orchard</option>
                  <option value="Other">Other</option>

              </select>
 </p>

<p>
  {props.formData.area === "Other" &&

  <input type="text"
  id="area-input"
  onChange={props.handleChange}
  ref={areaInput}
  value={props.formData.area}
  />}
</p>



 <p>
 <input
                type="checkbox"
                id="wifi"
                checked={props.formData.wifi}
                onChange={props.handleChange}
                name="wifi"
            />
<label htmlFor="wifi">Wifi?</label>
 </p>
 <p>
 <input
                type="checkbox"
                id="power"
                checked={props.formData.power}
                onChange={props.handleChange}
                name="power"
            />
<label htmlFor="power">Power Socket?</label>
 </p>

 <p>
 <input
                type="checkbox"
                id="favourite"
                checked={props.formData.favourite}
                onChange={props.handleChange}
                name="favourite"
            />
<label htmlFor="favourite">Save to Favourites?</label>
 </p>

  <p>
    <button className="btn" type="submit" onClick={navigateHome}>
Save
      </button>
  </p>
</form>


</div>
)
}
