"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-12 bg-custom-yellow md:h-96">
                <div className="col-span-1 md:col-span-7 place-self-center text-center md:mt-16">
                    <h1 className="text-custom-pink font-lobster mb-8 mt-8 text-4xl md:text-5xl">
                        <span className="font-lobster bg-clip-text mb-8">
                            Hey there 👋 I'm {" "}
                        </span>
                        <br></br>
              
                        <TypeAnimation
                            sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Xi Yang',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Software Engineer',
                            1000,
                            'Full Stack Developer',
                            1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{fontFamily: 'Lobster, cursive', color: '#e41c6f'}}
                            repeat={Infinity}
                        />
                    </h1>

                    <div className="button-container">
                        <button className="text-lg px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-custom-green via-custom-pink to-custom-white hover:bg-slate-200 text-white">Hire Me</button>
                        <button className="text-lg px-1 py-1 rounded-full mr-4 bg-#e41c6f hover:bg-pink-400 text-black">
                            <span className="block bg-[white] hover:bg-custom-pink-800 rounded-full px-5 py-2">Download Resume</span> 
                        </button>
                    </div>
                    
                    
                </div>

                <div className="col-span-1 md:col-span-5 place-self-center">
                        <Image 
                            src="/images/xiyang.jpg"
                            alt="hero image"
                            className="w-[200px] h-[200px] rounded-full md:w-[300px] md:h-[300px] mb-8 md:mb-0 md:mt-8 shadow-2xl"
                            width={200}
                            height={200}
                        />
          
                    
                </div>
            </div>
        </section>
        
    )
}

export default HeroSection;