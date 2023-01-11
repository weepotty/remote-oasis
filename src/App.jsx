import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import Start from "./Start.jsx";
import Home from "./Home.jsx";

export default function App() {
  const [getStarted, setGetStarted] = useState(false);

  function toggleStart() {
    setGetStarted((prevState) => !prevState);
    console.log(getStarted);
  }
  return (
    <div>{!getStarted ? <Start toggleStart={toggleStart} /> : <Home />}</div>
  );
}
