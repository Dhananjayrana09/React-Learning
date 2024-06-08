import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import { useEffect, useState } from "react";
import {toast} from "react-toastify"
import  Spinner  from "./Components/Spinner";



const App = () => {
  const[courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true)
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
          toast.error("networn error")
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData();
  }, [])


  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData = {filterData}/>
      </div>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses = {courses}/>)
        }
      </div>
    </div>
  );
}

export default App;
 