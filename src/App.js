import React from 'react';

import Navbar from "./Components/Navbar";
import Training from "./Components/Training";
import Whyus from './Components/Whyus';
import Training_calendar from './Components/Training_Calander';
import Solutions from './Components/Solutions';
import World from './Components/Worldwide';
import Client from './Components/Clients';

const App =() =>{  
  return(
    <>
    <Navbar/>
    <Whyus/>
    <Training/>
    <Training_calendar/>
    <Solutions/>
    <World/>
    <Client/>
    </>
  )
}
 
export default App;
