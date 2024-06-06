"use client";
import React from 'react';
import '../sidebar.css'
import { TypeAnimation } from 'react-type-animation';



const Sidebar = () => {
  return (
    <section>
        {/* <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center">
                <h1 className="greeting">
                    Hey there 👋
                </h1>
                <h1 className="person-name">
                    Xi Yang
                </h1>
                <img src="images/xi-yang.jpg" alt="Xi Yang" className="person-img"/>
                <h3 className="person-title">Software Engineer</h3>
                <a href="#section1" className="navbar-link">About</a>
                <a href="#section2" className="navbar-link">Projects</a>
                <a href="#section3" className="navbar-link">fun facts</a>
                <a href="#section4" className="navbar-link">Contact</a>
                <a href="#" className="navbar-link">Resume</a>

            </div>
        </div> */}

        <div className="sidebar">
            <h1 className="greeting">Hey there 👋 I'm</h1>
            <h1 className="text-white mb-20 text-4xl sm:text-5xl lg:text-6xl">
                <span className="bg-clip-text ">{" "}</span>
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Xi Yang',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Full Stack Engineer',
                    1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1em', display: 'inline-block' , fontFamily: 'Lobster, cursive', color: '#e41c6f'}}
                    repeat={Infinity}
                />
            </h1>
            
            
            
            <img src="/images/xiyang.jpg" alt="Xi Yang" className="person-img" />

            
            <div className="button-container">
                <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-custom-green via-custom-pink to-custom-white hover:bg-slate-200 text-white">Hire Me</button>
                <button className="px-1 py-1 rounded-full mr-4 bg-#e41c6f hover:bg-pink-400 text-black">
                    <span className="block bg-[white] hover:bg-custom-pink-800 rounded-full px-5 py-2">Download Resume</span> 
                </button>
            </div>
            <a href="#section1" className="navbar-link">About</a>
            <a href="#section2" className="navbar-link">Projects</a>
            <a href="#section3" className="navbar-link">Fun Facts</a>
            <a href="#section4" className="navbar-link">Contact</a>

        </div>
    </section>



    
  );
}

export default Sidebar;
