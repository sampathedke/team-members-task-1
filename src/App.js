// App.js

import React from 'react';
import './App.css';
import TeamSectionPage from './TeamSectionPage';



const Header=()=>{
  return(
    <div className="navbar bg-[#FA7D19] text-white  px-16">
    <div className="flex-1">
        <a href='' className="btn btn-ghost normal-case text-3xl" style={{color:'rgb(83, 237, 63)'}}><b>VeriTech</b></a>
    </div>
    <div className="flex-none">
        <ul className="menu menu-horizontal p-0 font-bold">
            <li><a>Home</a></li>
            <li><a href='#sec-1'>About</a></li>
            <li><a>Career</a></li>
            <li><a>Contact Us</a></li>
        </ul>
    </div>
</div>

  );

};

function App() {
  return (
    <div className="App">
      <Header/>
      <h3 className='about' id='sec-1'>About</h3>
     
     <p className='about-1'>Welcome to VeriTech Software IT Services, where a dedicated team of professionals works together to bring innovation, creativity and expertise to software industry, get to know the individuals who make our company thrive.</p>
      <TeamSectionPage/>
     
      <div className="text-center py-8">
                <p>Copyright © 2024 - All right reserved by VeriTech</p>
            </div>
    </div>
  );
}

export default App;
