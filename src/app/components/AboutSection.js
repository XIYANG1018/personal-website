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
        <li><span className='text-custom-pink font-semibold'>Languages: </span>Java/Python/C/JavaScript</li>
        <li><span className='text-custom-pink font-semibold'>Front-end Frameworks: </span>React/Next.js/Tailwind CSS</li>
        <li><span className='text-custom-pink font-semibold'>Back-end: </span>SpringBoot/MySQL/Docker/Redis/Kubernetes</li>
        <li><span className='text-custom-pink font-semibold'>Other: </span>AWS/Git</li>
      </ul>
    )
  },

  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>📍 Seattle, WA</li>
        <li><span className='text-custom-pink font-semibold'>MS in Computer Science, Northeastern University</span></li>
        <li>📍 Peking, China</li>
        <li>BA in Arabic Language and Literature, Peking University </li>
      </ul>
    )
  },

  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li><span className='text-custom-pink font-semibold'>AWS Certified Cloud Practitioner </span><em>Issued by Amazon Web Services Training and Certification</em></li>
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
    <section className='bg-[#eef] pt-20'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <div className='flex justify-center items-center'>
            <Image 
                src="/images/xiyang2.jpg"
                alt='person image'
                width={300}
                height={300}
                className='w-[200px] h-[200px] rounded-full md:w-[300px] md:h-[300px] mb-12 shadow-2xl'
              />
          
            
          </div>
          <div>
            <h2 className='text-center text-4xl font-bold text-black mb-4'>
                About Me
            </h2>
            <p className='text-base md:text-xl'>
              I am a full stack developer with a passion for developing seamless back-end application and
              interactive and responsive web applications. I am currently pursuing Computer Science master at Northeastern Seattle campus and will be graduating Fall 2025/Spring 2026 with an overall 4.0/4.0 GPA.
               I am a<span className='text-custom-pink font-semibold'>quick learner </span> and <span className='text-custom-pink font-semibold'>team player</span>. I am actively searching an internship that I can learn from and contribute to.
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
