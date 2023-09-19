import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import 'C:/Users/DELL/Desktop/javascript/travel/src/App.css';
import axios from "axios";
function App() {

    const [data,setData]=useState({})

    const apiKey ="f9e010e57c63abcd3eaf3c0800a2d750"
    const [inputcity,setinputcity] = useState({})
    const getWhetherDetails = (cityname) => {
        if(!cityname) return
         const apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid='+apiKey
         axios.get(apiUrl).then((res)=>{
            console.log("response",res.data)

            setData(res.data)
         }).catch((err)=> {
            console.log("err",err)
         })
    }
    const handleSearch = () =>{
       getWhetherDetails(inputcity)
    }
    const handlechangeinput=(e)=>{
        setinputcity(e.target.value)
        console.log("value",e.target.value)
    }
    useEffect(()=> {
        getWhetherDetails("delhi")
    }, [])


    return(
        <div className="col-md-12">
            <div className="whetherBg">
                <h1 className="font-weight">Whether App</h1>
                <div className="d-grid gap-3 col-4 mt-4">
                <input type="text" id="cityname" className="form-control" 
                value={inputcity}
                onChange={handlechangeinput}/>
                <button className="btn btn-primary" type="button"
                onClick={handleSearch}>search</button>
                
                </div>
            </div>
            <div className="col-md-12 text mt-5">
                <div className="shadow rounded whetherResultBox">
                  <img className="whethericon" src="https://purepng.com/public/uploads/large/purepng.com-weather-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596142qx4ep.png"></img>  
                    <h5 className="whetherCity">
                        {data?.name}
                    </h5>
                    <h6 className="whetherTempreture">
                    {(data?.main?.temp) - 273.15.toFixed(2)} °C
                    </h6>
                
                </div>

            </div>
            </div>
           
    
    );
}
export default App;




