import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'

export default function AddCafe (props) {



return(
<div className='container home'>
<h1>Have a new place to suggest?</h1>
  <form className='add-cafe' name="add-cafe" onSubmit={props.handleSubmit} method="POST" data-netlify="true">
  <p>
    <label htmlFor="cafe_name">Name of Cafe: </label>
    <input type="text" onChange={props.handleChange} name="cafe_name" id="cafe_name" value={props.formData.cafe_name} />
  </p>



 <p>
    <label htmlFor="address">Area: </label>

              <select
                  id="address"
                  value={props.formData.address}
                  onChange={props.handleChange}
                  name="address"
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
    <button className="btn" type="submit">Send</button>
  </p>
</form>

<Link to="/list"><button>back home</button></Link>
</div>
)
}
