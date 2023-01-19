import React from 'react'
import { Link} from 'react-router-dom';


export default function Start(props) {
  return (
    <div className="start container">
      <div className="start card">
        <h1 className="title">Where should I work today?</h1>
        <p className="subtitle">
          Somewhere you can experience the perfect blend of productivity and
          enjoyment. Good coffee, good tunes, good vibes.
        </p>


<Link to='list'><button className="btn" >
         Get Started
        </button></Link>





      </div>
    </div>
  );
}
