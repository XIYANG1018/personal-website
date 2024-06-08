import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "Article Management Application",
        description: "Authentication and CRUD operations",
        image: "/images/article.png",
        tag: ["All", "Web"],
        tech: "Java / Spring Boot / MySQL"
    },

    {
        id: 2,
        title: "E-Commerce Microservices",
        description: "Leveraging an event bus enabling seamless communication",
        image: "/images/ecommerce-platform.jpg",
        tag: ["All", "Web"],
        tech: "React / Express / Docker / Kubernetes"
    },

    {
        id: 3,
        title: "E-Commerce Platform",
        description: "Asynchronous order processing and distributed locking mechanisms",
        image: "/images/ecommerce-microservices.jpg",
        tag: ["All", "Web"],
        tech: "Redis / RabbitMQ / Java"
    },

    {
        id: 4,
        title: "Ticketing Mobile App",
        description: "QR code scanning and secure payment gateways",
        image: "/images/ticket.png",
        tag: ["All", "Mobile"],
        tech: "Flutter / React Native"
    },
]

const ProjectsSection = () => {
  return (
    <div className='bg-[#eef] mt-0 px-20 mb-8'>
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
                />
            ))}
        </div>
            
    </div>
  )
}

export default ProjectsSection
