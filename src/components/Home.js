import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Home = ({user}) => {
  return (
    <div className="home">
        
        
        <h1>Home page</h1>
        <div className="welcome"><h2>Welcome, <span>{user.username}</span></h2>
            </div>
    
        
    </div>
  )
}

export default Home
