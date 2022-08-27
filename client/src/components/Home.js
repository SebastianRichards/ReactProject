import React, { useState, useEffect } from 'react';

import Axios from 'axios';


import { Outlet, Link } from "react-router-dom";




const Home = ({user}) => {

  const [numberOfMicroreactors, setNumberOfMicroreactors] = useState(0);

  const [opcuaState, setOpcuaState] = useState("");

  

  const testOpcuaClient = () => {
    setOpcuaState("testing...");
    Axios.get("http://localhost:3001/testOpcua").then((resp) => {
      setOpcuaState(resp.data);
    
        
    })
    
  };


  useEffect(() => {
    Axios.get("http://localhost:3001/getMicroreactors").then((response) => {
       
        let arrayOfMrs = [];
       
        for(let i=0; i < response.data.length;i++) {
            if (response.data[i].user == localStorage.getItem("userUsername")) {
                arrayOfMrs.push(response.data[i])
            }
        }

        
        
        
        setNumberOfMicroreactors(arrayOfMrs.length);
        
        
        
    });
    
    
  }, []);

  return (
    <div className="home homeContainer">
        
        
        
        <div className="welcome home1">
       
	
      
        
          <div className='welcomeText'><h2 id='homeh2'>Welcome, <span>{user.username}</span></h2></div>

          <div className='welcome2 home2'>Number of microreactors created: {numberOfMicroreactors}</div>

          <div className="home3"><button onClick={testOpcuaClient} className="button-76 introItem1" role="button"><span class="text">Test OPC UA Connection</span></button></div>
          <div className='home4'>{opcuaState}</div>
          

        </div>
    
        
    </div>
  )
}

export default Home
