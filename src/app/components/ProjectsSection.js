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
        
    },

    {
        id: 2,
        title: "Tickets App Microservices",
        description: "Leveraging an event bus enabling seamless communication",
        image: "/images/ecommerce-platform.jpg",
        tag: ["All", "Web"],
        tech: "React / Express.js / Docker / Kubernetes",
        codeLink: "https://github.com/XIYANG1018/ticket-microservices"
    },

    {
        id: 3,
        title: "Brewtopia Coffee Lab",
        description: "Asynchronous order processing and distributed locking mechanisms",
        image: "/images/coffeeLab.png",
        tag: ["All", "Web"],
        tech: "Redis / RabbitMQ / Java",
        codeLink: "https://github.com/XIYANG1018/Brewtopia-Coffee-Lab"
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
                />
            ))}
        </div>
            
    </div>
  )
}

export default ProjectsSection
