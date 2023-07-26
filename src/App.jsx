import React from 'react';
import Navbar from "./Components/Navbar";
import Training from "./Components/Training";
import Whyus from './Components/Whyus';
import TrainingCalendar from './Components/Training_Calander';
import Solutions from './Components/Solutions';
import World from './Components/Worldwide';
import Client from './Components/Clients';
import Trainingdata from './Components/Trainingdata';
import Sdata from './Components/Card';

const App =() =>{  
  return(
    <>
    <Navbar/>
    <Whyus/>
    <Training/>
    <TrainingCalendar/>
    <Solutions/>
    <World/>
    <Client/>
    </>
  )
}
 
export default App;
