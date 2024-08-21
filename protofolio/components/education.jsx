const details = [
  {
    degree: "Secondary School Level.",
    institution: "KEBS",
    gpa: "3.95",
    start_year: "2075 B.S.",
    end_year: "2077 B.S.",
    description:
      "Completed my high school education at KEBS with a strong academic performance, achieving a GPA of 3.95. I gained a solid foundation in various subjects and prepared myself for higher education.",
  },
  {
    degree: "+2 in Computer Science",
    institution: "Nobel Academy",
    gpa: "3.64",
    start_year: "2078 B.S.",
    end_year: "2080 B.S.",
    description:
      "Pursued +2 in Computer Science at Nobel Academy, where I developed a understanding of programming and basic computer science concepts. Graduated with a GPA of 3.64.",
  },
  {
    degree: "BSc. CSIT",
    institution: "Ascol",
    gpa: "Ongoing",
    start_year: "2080 B.S.",
    end_year: "Present",
    description:
      "Currently pursuing a Bachelor of Science in Computer Science and Information Technology (BSc. CSIT) at Ascol, focusing on advanced topics in computing, software development, and information systems.",
  },
];
export default function Education() {
  return (
    <div className="w-full max-w-[48rem]  p-3 mx-auto">
      <h1 className="text-[40px] text-gray-400 text-left font-thin">
        Education
      </h1>
      <div className="mt-12">
        {details.map((data, index) => (
          <div key={index} >
            <div className="flex items-center">
              <span className="rounded-full bg-[#58728f] w-5 h-5"></span>
              <span className="pl-3 text-xl text-gray-300">{data.degree}</span>
            </div>
            <div className="text-gray-400 border-l border-gray-500 pb-5 pl-6 ml-[9px] ">
              <div className="flex flex-col md:flex-row justify-between w-full">
                <span className="text-gray-200">{`${data.institution} (${data.gpa})`}</span>
                <span className="text-sm text-gray-300">{`${data.start_year}-${data.end_year}`}</span>
              </div>
              <div className="mt-2 text-sm">{data.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
