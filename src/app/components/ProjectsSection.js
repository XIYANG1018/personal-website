import React from 'react'
import ProjectCard from './ProjectCard'
import PreviousMap from 'postcss/lib/previous-map'

const projectData = [
    {
        id: 1,
        title: "Article Management Application",
        description: "Authentication and CRUD operations",
        image: "/images/article.png",
        tag: ["All", "Web"],
        tech: "Java / Spring Boot / MySQL",
        codeLink: "https://github.com/XIYANG1018/ArticleManagement",
        deployLink: '/'
        
    },

    {
        id: 2,
        title: "Tickets App Microservices",
        description: "Leveraging an event bus enabling seamless communication",
        image: "/images/ecommerce-platform.jpg",
        tag: ["All", "Web"],
        tech: "React / Express.js / Docker / Kubernetes",
        codeLink: "https://github.com/XIYANG1018/ticket-microservices",
        deployLink: '/'
    },

    {
        id: 3,
        title: "Brewtopia Coffee Lab Full Stack Application",
        description: "Order processing, Paypal API, User authentication, Admin functionalities",
        tag: ["All", "Web"],
        tech: "MongoDB / Express / React / Node.js",
        codeLink: "https://github.com/XIYANG1018/Brewtopia-Coffee-Lab",
        deployLink: 'https://brewtopia-coffee-lab.onrender.com/'
    },

    {
        id: 4,
        title: "The Pain Cognition and Modulation Laboratory",
        description: "The official website for teh PCML lab",
        image: "/images/lab.png",
        tag: ["All", "Web"],
        tech: "React / Bootstrap",
        codeLink: "https://github.com/XIYANG1018/PCML-Website",
        deployLink: "https://www.pcml.online/"
    },

]

const ProjectsSection = () => {
  return (
    <div id='projects' className='bg-[#eef] mt-0 px-12 md:px-20 mb-8'>
        <h2 className='text-center text-4xl font-bold text-black my-12'>
            My Projects
        </h2>

        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {projectData.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    tag={project.tag}
                    tech={project.tech}
                    codeLink={project.codeLink}
                    deployLink={project.deployLink}
                />
            ))}
        </div>
            
    </div>
  )
}

export default ProjectsSection
