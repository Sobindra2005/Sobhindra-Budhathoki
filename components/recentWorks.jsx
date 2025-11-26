"use client"
import Image from "next/image";
import { PiImageSquareThin } from "react-icons/pi";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Saasential",
    description:
      "platform that allows users to select website templates and customize them according to their needs.",
    image: "/images/image.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "tanstack/react-query",
      "openRouter ai API",
      "grapejs studio"
    ],
    link: "https://saa-sential.vercel.app/",
    repo: "https://github.com/Sobindra2005/SaaSential",
    tags: ["Full-Stack"],
  },
  {
    title: "Kripa Therapy",
    description:
      "A therapy consultation platform featuring online appointment booking, approval system, and real-time status tracking for patients and therapists.",
    image: "/images/kripa.png",
    technologies: ["React","appwrite"],
    link: "https://kripatherapy.vercel.app/",
    repo: "https://github.com/Sobindra2005/kripatherapy",
    tags: ["Full-Stack", "Healthcare" ,"collaboration"],
  },
  {
    title: "Agrosikshya",
    description:
      "A platform which connects farmers/agribussiness enthusiasts with experts along with well managed courses,map based crops suggestion,Financial Diary and Ask to Expert features",
    image: "/images/Screenshot 2025-01-03 210049.png",
    technologies: ["React", "Tailwind CSS", "MongoDB", "NARC api", "Express.js"],
    link: "#",
    repo: "https://github.com/Sobindra2005/IdeaX-2024.git",
    tags: ["Full Stack", "Agriculture"],
  },

];

export default function RecentWorks() {
  return (
    <div className="p-8 w-full">
      <h1 className="text-[37px] text-center font-thin mt-2 mb-10">
        Recent Works
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg shadow-lg shadow-gray-900 hover:shadow-blue-900 hover:border-blue-900 h-auto w-full min-[444px]:w-[350px] sm:w-[350px] "
          >
            <div className=" z-1  h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={192}
                className="object-cover w-full h-full object-center rounded-t-md"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl mt-2 flex justify-between">{project.title}<a href={`/project/${project.title}`} className="cursor-pointer p-2   hover:rounded-full hover:bg-gray-700  "><PiImageSquareThin /></a></h2>
              <p className="text-gray-600 text-sm leading-tight mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-gray-700 text-gray-400 py-0.5 px-2 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                <a
                  href={project.link}
                  className="flex items-center gap-1.5 text-blue-500 hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.repo}
                  className="flex items-center gap-1.5 text-gray-400 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>Source Code</span>
                </a>
              </div>
              {project.tags && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 py-1 px-2 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
