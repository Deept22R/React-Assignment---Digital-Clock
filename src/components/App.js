import React, { useEffect, useState } from 'react';
import "../styles/App.css";
let date = new Date();
const App = () => {
    const [time, setTime] = useState("");
    const [hr,setHr] = useState(date.getHours());
    const [min,setMin] = useState(date.getMinutes());
    const [sec,setSec] = useState(date.getSeconds());
    const [amOrPm,setAmOrPm] = useState("am");

    const renderTime = () =>{
         if(time==="")
               setTime(hr+":"+min+":"+sec+" "+amOrPm);
        return time;
    }
    const updateTime = () =>{
        setSec((prev)=>(prev+1));
        if(sec===60){
            setMin((prev)=>(prev+1));
            setSec(0);
            // setTime(hr+":"+min+":"+sec+" "+amOrPm);
            if(min===60){
                setHr((prev)=>(prev+1));
                setMin(0);
                
            } 
        }
        console.log(sec);
        setTime(hr+":"+min+":"+sec+" "+amOrPm);
    }

    useEffect(()=>{
        let clearSetInterval = setInterval(updateTime,1000);
        return () => clearInterval(clearSetInterval);
    });
    return (
        <>
        <div className="Clock">
            <h3 id="time">{renderTime()}</h3>
        </div>
     </>
    );
};

export default App;


    //     const [time, setTime] = useState("");
    //     let date = new Date();
    //     let hr = data.getHours();
    //     let min = date.getMinutes();
    //     let sec = date.getSeconds();
    //     let setAmPm = "AM";
    //     if(hr>12){
    //         hr = hr-12;
    //         setAmPm = "PM";
    //     }
