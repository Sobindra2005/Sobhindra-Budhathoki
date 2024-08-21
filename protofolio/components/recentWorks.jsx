import Image from "next/image";

const projects = [
    {
      title: "Tournament Organizer",
      description: "The Tournament Organizing Platform is designed to facilitate the management and execution of tournaments and competitions.",
      image: "/images/Screenshot from 2024-08-20 20-38-06-1.png",
      technologies: ["Next.js", "Tailwind css"],
      link: "https://project-one.example.com",
      repo: "https://github.com/user/project-one",
      tags: ["Full Stack"],
      status:"pending.."
    },
    {
      title: "IT_JOBS",
      description: "a platform for IT professionals to find job opportunities and for employers to post job openings.",
      image: "/images/Screenshot from 2024-08-20 20-19-02.png",
      technologies: ["React.js", "MongoDB","Socket.io","express.js","Multer","Tailwind css",],
      link: "https://project-two.example.com",
      repo: "https://github.com/Sobindra2005/IT_JOBS",
      tags: ["Full-Stack"],
      status:"completed"
    },
  
  ];
  
  export default function RecentWorks() {
    return (
      <div className="p-8 ">
        <h1 className="text-[37px] text-center font-thin mt-2 mb-10">Recent Works</h1>
        <div className="flex items-center justify-center flex-wrap space-x-16 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border  cursor-pointer  border-gray-700  rounded-lg shadow-lg shadow-gray-900 hover:shadow-blue-900 hover:border-blue-900 h-[28rem] p-4 w-full sm:w-80"
            >
              <Image
                  layout="responsive" 
                  width={200}
                  height={200}
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover object-center  rounded-md"
              />
              <h2 className="text-xl mt-2">{project.title}</h2>
              <p className="text-gray-600 text-[15px] leading-none">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="border  border-gray-700  text-gray-400 py-0.5 px-2 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-1 flex gap-2">
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
              <span>{project.status}</span>
              </div>
              {project.tags && (
                <div className="mt-1 flex flex-wrap gap-2">
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
          ))}
        </div>
      </div>
    );
  }
  