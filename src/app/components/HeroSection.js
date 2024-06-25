"use client"
import React, { useState }  from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from 'react-scroll';
import confetti from "canvas-confetti";

const RESUME_URL = 'https://personal-website-wheat-nine-27.vercel.app/XiYang_resume.pdf';

const HeroSection = () => {
    const [showConfetti, setShowConfetti] = useState(false);

    // 这种方法会让confetti效果滞后一次点击
    // 点击 -> 添加事件 -> 点击 -> 效果生效
    // const handleClick = () => {
    //     document.getElementsByClassName("confetti-button")[0].addEventListener("click", () => {
    //         confetti();
    //     })
    // }
    const handleClick = () => {
        setShowConfetti(true);
        confetti(); // 在这里直接触发 confetti 效果
    };

    // const downloadFileAtUrl = (url)=> {
    //     const aTag = document.createElement('a');
    //     const fileName = 'Xi_Yang_Resume.pdf';
    //     aTag.href = url;
    //     aTag.setAttribute('download', fileName);
    //     document.body.appendChild(aTag);
    //     aTag.click();
    //     aTag.remove();
    // }

    const downloadFileAtUrl = (url) => {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const aTag = document.createElement('a');
                aTag.href = url;
                aTag.setAttribute('download', 'Xi_Yang_Resume.pdf');
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            })
            .catch(error => console.error('Error downloading file:', error));
    };

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-12 bg-[#eef] md:h-96">
                <div className="col-span-1 md:col-span-7 place-self-center text-center md:mt-16">
                    <h1 className="text-custom-pink font-lobster mb-8 mt-8 text-4xl md:text-5xl">
                        <span className="font-lobster bg-clip-text mb-8">
                            Hey there 👋 I&apos;m {" "}
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
                        <ScrollLink to='contact' spy={true} smooth={true} offset={50} duration={500} >
                            <button 
                            className="confetti-button text-lg px-6 py-3 rounded-full mr-4 mb-4 bg-gradient-to-br from-custom-green via-custom-pink to-custom-white hover:bg-slate-200 text-white"
                            onClick={handleClick}
                            >Hire Me</button>
                        </ScrollLink>
                        
                       
                        <button
                            className="text-lg px-1 py-1 rounded-full mr-4 mb-4 bg-#e41c6f hover:bg-pink-400 text-black"
                            onClick={() => {downloadFileAtUrl(RESUME_URL)}}>
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