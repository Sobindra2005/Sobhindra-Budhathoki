"use client"
import { Link } from "lucide-react";
import Image from "next/image";
import { PiImageSquareThin } from "react-icons/pi";

const projects = [
  {
    title: "Tournament Organizer",
    description:
      "The Tournament Organizing Platform is designed to facilitate the management and execution of tournaments and competitions.",
    image: "/images/Screenshot from 2024-08-20 20-38-06-1.png",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "#",
    repo: "https://github.com/user/project-one",
    tags: ["Full Stack"],
    status: "pending..",
  },
  {
    title: "IT_JOBS",
    description:
      "A platform for IT professionals to find job opportunities and for employers to post job openings.",
    image: "/images/Screenshot from 2024-08-20 20-19-02.png",
    technologies: [
      "React.js",
      "MongoDB",
      "Socket.io",
      "Express.js",
      "Multer",
      "Tailwind CSS",
    ],
    link: "#",
    repo: "https://github.com/Sobindra2005/IT_JOBS",
    tags: ["Full-Stack"],
    status: "completed",
  },
  {
    title: "Agrosikshya",
    description:
      "A platform which connects farmers/agribussiness enthusiasts with experts along with well managed courses,map based crops suggestion,Financial Diary and Ask to Expert features",
    image: "/images/Screenshot 2025-01-03 210049.png",
    technologies: ["React", "Tailwind CSS", "MongoDB", "NARC api", "Express.js"],
    link: "#",
    repo: "https://github.com/Sobindra2005/IdeaX-2024.git",
    tags: ["Full Stack", "Agriculture", "Ideax-2024"],
    status: "completed",
  },
  {
    title: "GymSite",
    description:
      "A platform for gym enthusiasts to find and book gym sessions, and for gym owners to manage their facilities and clients.",
    image: "/images/Screenshot 2025-01-03 212447.png",
    technologies: ["Next.js", "Tailwind CSS", "Strapi"],
    link: "#",
    repo: "https://github.com/Sobindra2005/gymsite.git",
    tags: ["Static", "Fitness"],
    status: "completed",
  },
  {
    title: "Saras",
    description:
      "A food delivery platform that connects customers with gamifications and rewards along with the credit system for the payment.",
    image: "/images/Screenshot_2024-12-31-05-43-33-46_f73b71075b1de7323614b647fe394240.webp",
    technologies: ["React Native", "Node.js", "expo", "mongoDb"],
    link: "#",
    repo: "https://github.com/Sobindra2005/FoodApp.git",
    tags: ["Mobile App", "Gamification", "Jiffy Hackanthon"],
    status: "completed",
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
              <div className="mt-2 flex flex-wrap gap-4">
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
                <a
                  href={project.repo}
                  className="text-green-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                <span className="text-gray-500">{project.status}</span>
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
