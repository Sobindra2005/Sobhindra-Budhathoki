const GetInTouch = () => {
  return (
    <div className="text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-thin mb-4">Get in Touch</h2>
        
        <p className="mb-4 text-gray-400">
          Have a question or want to work together? Reach out!
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            className="px-3 py-2 rounded-lg bg-black border border-gray-900 text-gray-400 focus:outline-none hover:border-blue-700 focus:border-blue-700"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            className="px-3 py-2 rounded-lg bg-black border border-gray-900 text-gray-400 focus:outline-none hover:border-blue-700 focus:border-blue-700"
            placeholder="Your Email"
            required
          />
          <button
            type="submit"
            className="p-1.5 px-3 border border-gray-700 rounded-md text-white hover:border-blue-900 shadow-md hover:bg-[#000000c5] hover:shadow-blue-900 transition duration-300"
          >
            Send
          </button>
        </form>
        <div className="mt-4">
          <p>Or email me directly at:</p>
          <a href="mailto:sobhindra2005@gmail.com" className="text-indigo-500 hover:underline">
            sobhindra2005@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
