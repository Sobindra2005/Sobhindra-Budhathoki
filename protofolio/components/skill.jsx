import Image from "next/image";

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
      {
        name: "TypeScript",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesS2-HjTPHk96AEORqkIlhoqypQfHzYfLqw&s"
      },
      {
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
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
    category: "Others",
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
      {
        name: "Docker",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "strapi",
        icon: "https://yt3.googleusercontent.com/frBWP24Yx3w3EVtQgB7-Z3KI46w272tn3ZCBbpHfaQutVnMHe49-fLutBRUgfP3hO9iQQYokkg=s900-c-k-c0x00ffffff-no-rj"
      },
      {
        name: "C",
        icon: "https://i.namu.wiki/i/KcqDuQYTxNpUcLIMZTg28QXse0XiWx1G7K68kYYCo1GuhoHmhB_V8Qe9odGGt0BH9-0nQZTN53WXTNpDmwVfWQ.svg"
      },
      {
        name: "C++",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
      }
    ],

  }
];


export default function Skill() {
  return (
    <div className="px-4 py-8 mx-auto max-w-4xl">
      <h1 className="text-left text-[30px] font-thin capitalize mb-12">
        {"These are the technologies"}
        <br /> {"that I've been using"}
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {datas.map((data, index) => (
          <div
            key={index}
            className="border border-gray-700 hover:border-violet-700 shadow-lg hover:shadow-violet-900 shadow-gray-800 cursor-pointer h-fit w-full max-w-[13rem] rounded-md p-4"
          >
            <h1 className="text-xl text-gray-400 text-center">
              {data.category}
            </h1>
            {data.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="mt-3 text-gray-400 flex items-center"
              >
                <div className="w-6 h-6 rounded-full ">
                  <Image
                    src={skill.icon}
                    width={200}
                    height={200}
                    className="object-cover object-center"
                    alt={`${skill.name} icon`}
                  />
                </div>
                <span className="pl-2 text-md capitalize">{skill.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
