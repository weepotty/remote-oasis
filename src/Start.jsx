import React from 'react'



export default function Start(props) {
  return (
    <div className="start container">
      <div className="start card">
        <h1 className="title">Where shall I work today?</h1>
        <p className="subtitle">
          Somewhere you can experience the perfect blend of productivity and
          enjoyment. Good coffee, good tunes, good vibes.
        </p>

        <button className="btn" onClick={props.toggleStart}>
          Get Started
        </button>

       


        

  
      </div>
    </div>
  );
}
