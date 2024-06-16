import React from 'react'
import Image from 'next/image'
import { CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline"
import Link from "next/link"

const ProjectCard = ({imgUrl, title, description, tag, tech, codeLink, previewLink} ) => {
  return (
    <div>
        <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize:"cover"}}>
          <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-80 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
            <div className='flex flex-col items-center'>
              <div className='flex flex-row'>
                <Link href={codeLink} className='h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white"/>
                </Link>
                <Link href="/" className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                  <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white"/>
                </Link>
              </div>
              <div>
                <h2 className=' text-sm md:text-xl my-6 text-white'>{tech}</h2>
              </div>
            </div>
            
            
              
   
          </div>

          
        </div>

        <div className='text-white rounded-b-xl bg-custom-pink py-6 px-4'>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-white'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard
