import React, {Component, useState} from "react";
import "../styles/App.css";

class App extends Component {
    constructor() {
      super();
      this.state = {
        time: new Date().toLocaleTimeString(),
      }
      this.dateFunction = this.dateFunction.bind(this);
    }
  
    dateFunction() {
      let date = new Date();
      let updateHour = date.getHours();
      let updateMinute = date.getMinutes();
      let updateSecond = date.getSeconds();
      let updateAMPM = updateHour < 12 ? 'AM' : 'PM';
      updateHour=updateHour>12 ? updateHour-12: updateHour;
      if(updateMinute < 10) updateMinute = `0${updateMinute}`;
      if(updateSecond < 10) updateSecond = `0${updateSecond}`;
      let updateTime = `${updateHour}:${updateMinute}:${updateSecond} ${updateAMPM}`;
      this.setState({time: updateTime});
    }
  
    componentDidMount() {
      this.loadInterval = setInterval(this.dateFunction, 1000)
    }
  
    componentWillUnmount() {
      clearInterval(this.loadInterval);
    }
  
    render() {
      return(
        <>
          <div className="Clock">
            <h3 id="time">{this.state.time}</h3>
          </div>
        </>
      )
    }
  }
  
   
  
  export default App;
// let date = new Date();
// const App = () => {
//     const [time, setTime] = useState("");
//     const [hr,setHr] = useState(date.getHours());
//     const [min,setMin] = useState(date.getMinutes());
//     const [sec,setSec] = useState(date.getSeconds());
//     const [amOrPm,setAmOrPm] = useState("am");

//     const renderTime = () =>{
//          if(time==="")
//                setTime(hr+":"+min+":"+sec+" "+amOrPm);
//         return time;
//     }
//     const updateTime = () =>{
//         setSec((prev)=>(prev+1));
//         if(sec===59){
//             setMin((prev)=>(prev+1));
//             setSec(0);
//             // setTime(hr+":"+min+":"+sec+" "+amOrPm);
//             if(min===59){
//                 setHr((prev)=>(prev+1));
//                 setMin(0);
//             } 
//         }
//         console.log(sec);
//         setTime(hr+":"+min+":"+sec+" "+amOrPm);
//     }

//     useEffect(()=>{
//         let clearSetInterval = setInterval(updateTime,1000);
//         return () => clearInterval(clearSetInterval);
//     });
//     return (
//         <>
//         <div className="Clock">
//             <h3 id="time">{renderTime()}</h3>
//         </div>
//      </>
//     );
// };

// export default App;


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
