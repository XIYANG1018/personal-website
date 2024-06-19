"use client"
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li><span className='text-custom-pink font-semibold'>Languages: </span>Java, Python, C/C++, JavaScript, SQL</li>
        <li><span className='text-custom-pink font-semibold'>Frameworks & Tools: </span>SpringBoot, React.js, Node.js, MyBatis, MySQL, Redis, Docker, Kubernetes, AWS, Git</li>
      </ul>
    )
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>📍 Seattle, WA</li>
        <li><span className='text-custom-pink font-semibold'>MS in Computer Science with 4.0 GPA, Northeastern University</span></li>
        <li>📍 Peking, China</li>
        <li>BA in Arabic Language and Literature with 3.73 GPA, Peking University </li>
      </ul>
    )
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li><span className='text-custom-pink font-semibold'>SQL</span> <em>certified by HackerRank</em></li>
        <li><span className='text-custom-pink font-semibold'>Professional Communication</span> <em>certified by Northeastern University</em></li>
      </ul>
    )
  },
]

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange=(id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
    <section id='about' className='bg-[#eef] py-20'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <div className='flex justify-center items-center flex-col text-4xl text-custom-pink mb-10'>
            <p className='font-lobster'>I know</p>
            <p className='font-lobster'>securing the first job</p>
            <p className='font-lobster'>is difficult</p>
            <p className='font-lobster'>but I&apos;m consistently</p>
            <p className='font-lobster'>moving forward.</p>
          </div>
          <div>
            <h2 className='text-center text-4xl font-bold text-black mb-4'>
                About Me
            </h2>
            <p className='text-base md:text-xl'>
              I am a full-stack/backend developer with a passion for developing seamless, scalable,
              interactive and responsive web applications. I am currently pursuing Computer Science master at Northeastern Seattle campus and will be graduating Spring 2026 with an overall 4.0/4.0 GPA.
               I am a <span className='text-custom-pink font-semibold'>quick learner </span> and <span className='text-custom-pink font-semibold'>team player</span>. I am actively searching an internship that I can learn from and contribute to.
            </p>

            <div className='flex flex-row mt-8 md:text-xl'>
              <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
              <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
              <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
            </div>

            <div className='mt-8 md:text-xl'>
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
          


      </div>
        
    </section>
  )
}

export default About
