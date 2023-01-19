
import "./assets/css/App.css";
import Start from "./Start.jsx";
import Home from "./Home.jsx";
import {Routes, Route} from 'react-router-dom'
import Info from "./Info";
export default function App() {

  return (
    <div>



<Routes>
<Route path="/" element={<Start />} />
<Route path="list" element={<Home />} />
<Route path="list/:cafeId" element={<Info />} />

</Routes>


    </div>


  );
}
