import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import image from "../background.jpeg"

export default function Project() {

    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error)
    }, []);

    return (
        <main className="relative">
            {/* <Particles params={particlesConfig} className="bg-black absolute object-cover w-full h-full"/> */}
            <img 
                src={image}
                alt="Background"
                className="absolute object-cover w-full h-full"
            />
            {/* <div className="p-10 container mx-auto relative"> */}
            <div className="relative flex justify-center min-h-screen pt-12 lg:pt-32 px-8">
                <section className="container mx-auto justify-center">
                    <h1 className="text-5xl flex justify-center cursive textColor">My Projects</h1>
                    {/* <h2 className="text-lg text-gray-500 flex justify-center mb-12 pt-5">Welcome to my projects</h2> */}
                    <section className="grid lg:grid-cols-3 sm:grid-cols-1 gap-8 pt-10">
                        { projectData && projectData.map((project, index) => (
                            <article className="relative rounded-lg shadow-xl bg-white p-16">
                                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                                    <a 
                                        href={project.link} 
                                        alt={project.title} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold">Finished on</strong>:{" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Type</strong>:{" "}
                                        {project.projectType}
                                    </span>
                                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <a 
                                        href={project.link} 
                                        rel="noopener noreferrer" 
                                        target="_blank" 
                                        className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                                    >
                                        View the Project{" "}
                                        <span role="img" aria-label="right pointer">
                                            👉
                                        </span>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </section>
                </section>
            </div>
        </main>
    )
}