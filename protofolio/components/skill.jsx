const datas = [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "React.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express.js",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        },
        {
          name: "Socket.io",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
        },
        {
          name: "JWT",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/json/json-original.svg",
        },
        {
          name: "Multer",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/multer/multer-original.svg",
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        {
          name: "Postman",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
        },
        {
          name: "Git",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
        },
        {
          name: "Vercel",
          icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
        },
      ],
    },
  ];
  
  export default function Skill() {
    return (
      <div className="ml-[7rem] my-[8rem]">
        <h1 className="capitalize font-thin text-[30px]">
          These are the technologies
          <br /> that I've been using
        </h1>
        <div className="flex w-full pl-[5rem] mt-12 space-x-9">
          {datas.map((data, index) => (
            <div
              key={index}
              className="border hover:border-violet-700 shadow-lg hover:shadow-violet-900 shadow-gray-800 cursor-pointer h-fit w-[13rem] rounded-md p-4 border-gray-700"
            >
              <h1 className="text-xl text-gray-400">{data.category}</h1>
              {data.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="mt-3 text-gray-400 flex items-center"
                >
                  <img
                    src={skill.icon}
                   
                    className="w-6 h-6 rounded-full object-center object-cover"
                  />
                  <span className="pl-2 text-md capitalize">{skill.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
  