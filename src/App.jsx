import React, {useState, useEffect} from 'react'
import Mains from './Components/Mains.jsx';
import Sidebar from "./Components/Sidebar.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
const [showModel, setShowmodel] = useState(false);
const [data, setData] = useState(null);

useEffect(()=>{
  (async ()=> {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;
    const res = await fetch(url);
    const apiData = await res.json();
    setData(apiData);
    console.log(apiData);
    
    
  })();
},[])

function handleToggleModel(){
  setShowmodel(!showModel);
}
  return (
    <div>
      {data ? (<Mains data={data}/>) : 
      <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
        </div>}

   {showModel && ( <Sidebar data={data} handleToggleModel={handleToggleModel}/>)}
   
    {data && (<Footer data={data} handleToggleModel={handleToggleModel}/>)}
    </div>
  )
} 

export default App