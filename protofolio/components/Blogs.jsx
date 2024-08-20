const blogPosts = [
  {
    title: "Understanding React Hooks",
    description: "A deep dive into React hooks and how they can simplify your code.",
    image: "https://i.pinimg.com/236x/b8/b0/94/b8b094d897ac458e6bb1bb1e04c7fc6d.jpg",
    link: "/blogs/react-hooks"
  },
  {
    title: "Tailwind CSS: A Comprehensive Guide",
    description: "Learn how to use Tailwind CSS to build modern and responsive web designs.",
    image: "https://i.pinimg.com/236x/ad/af/52/adaf521fde101fe3d8f2daa093cec545.jpg",
    link: "/blogs/tailwind-css-guide"
  }
];
  export default function Blogs() {
    return (
      <div className="p-8">
        <h1 className="text-[36px] font-thin text-center mb-6">Latest Blog Posts</h1>
        <div className=" flex-wrap space-x-16 flex justify-center mt-10 ">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg shadow-lg shadow-gray-800 hover:border-blue-900 cursor-pointer hover:shadow-blue-900 overflow-hidden w-full sm:w-80"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold leading-none ">{post.title}</h2>
                <p className="text-gray-600 leading-tight ">{post.description}</p>
                <a
                  href={post.link}
                  className="text-blue-500 hover:underline mt-4 block"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  