import "./assets/css/App.css";
import Start from "./Start.jsx";
import Home from "./Home.jsx";
import { Routes, Route } from "react-router-dom";
import Info from "./Info";
import AddCafe from "./AddCafe";
import data from "./data";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [cafeData, setCafeData] = useState(data);

  const [formData, setFormData] = useState({
    id: '',
    cafe_name: "",
    address: "",
    favourite: false,
    power: false,
    wifi: false,
    image: "",
    area: "",
  });


  function toggleFavourite(event, id) {
    event.preventDefault();
    setCafeData((prevData) => {
      return prevData.map((cafe) => {
        return cafe.id == id ? { ...cafe, favourite: !cafe.favourite } : cafe;
      });
    });
  }


  const areaInput = useRef(null);

    function handleChange(event) {
      const { name, value, type, checked } = event.target;
      setFormData((prevFormData) => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
            id: cafeData.length+1
          };
        }
      );
    }



  function handleSubmit(event) {
    event.preventDefault();
    let newFormData = {...formData};
    if (newFormData.area === 'Other') {
      newFormData.area = areaInput.current.value;
    }
    const newCafeData = [...cafeData, formData];
    setCafeData(newCafeData);
    localStorage.setItem("cafeData", JSON.stringify(newCafeData));
setFormData({
  id: '',
  cafe_name: "",
  address: "",
  favourite: false,
  power: false,
  wifi: false,
  image: "",
  area: "",
})
  }

  useEffect(() => {
    const storedCafeData = JSON.parse(localStorage.getItem("cafeData"));
    if (storedCafeData) {
      setCafeData(storedCafeData);
    }
  }, []);

  console.log(cafeData);

    function handleLogout() {
      console.log('clicked')
    localStorage.removeItem('cafeData')
  }



  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="list"
          element={
            <Home
            cafeData={cafeData}
            toggleFavourite={toggleFavourite}
            handleLogout={handleLogout} />
          }
        />
        <Route path="list/:cafeId" element={<Info cafeData={cafeData} />} />
        <Route
          path="add"
          element={
            <AddCafe
              formData={formData}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          }
        />
      </Routes>
    </div>
  );
}
