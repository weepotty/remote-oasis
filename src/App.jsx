
import "./assets/css/App.css";
import Start from "./Start.jsx";
import Home from "./Home.jsx";
import {Routes, Route} from 'react-router-dom'
import Info from "./Info";
import AddCafe from "./AddCafe";
import data from "./data";
import {useState, useEffect} from 'react'

export default function App() {
  const [cafeData, setCafeData] = useState(data)

  const [formData, setFormData] = useState(
    {
      id: cafeData.length+1,
      cafe_name: "",
        address: "",
       favourite: false,
        power:false,
        wifi:false,
        image:""

    }
  )

function handleChange(event) {
console.log(event.target)
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
}

  function handleSubmit(event) {
    event.preventDefault()
    const newCafeData = [...cafeData, formData]
    setCafeData(newCafeData)
    console.log('clicked')
    localStorage.setItem('cafeData', JSON.stringify(newCafeData))
  }


  useEffect(() => {
    const storedCafeData = JSON.parse(localStorage.getItem('cafeData'))
    if(storedCafeData) {
        setCafeData(storedCafeData)
    }
  }, [])

//   function handleLogout() {
//   localStorage.removeItem('cafeData')
// }

// handleLogout()


  console.log(cafeData)


  return (
    <div>



<Routes>
<Route path="/" element={<Start />} />
<Route path="list" element={<Home cafeData={cafeData} />} />
<Route path="list/:cafeId" element={<Info cafeData={cafeData} />} />
<Route path="add" element={<AddCafe formData={formData} handleSubmit={handleSubmit} handleChange={handleChange} />} />


</Routes>


    </div>


  );
}
