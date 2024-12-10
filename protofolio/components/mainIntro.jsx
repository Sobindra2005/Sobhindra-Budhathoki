import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image"; 

export default function Mainintro() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-12 lg:px-24 pb-12 bg-black">
      {/* Left Section */}
      <div className="flex flex-col items-start text-white space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
         Hi, I&apos;m{" "}
          <span className="text-blue-500">Sobhindra Budhathoki!</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
          A tech enthusiast driven by curiosity and a love for learning with a
          passion for exploring new technologies and transforming them into
          creative solutions.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto">
          <a
            href="/Grey and White Clean Minimalist CV Resume.pdf"
            download="Sobhindra_Budhathoki_CV.pdf"
          >
            <button className="flex items-center justify-center border border-gray-500 text-gray-400 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full w-full sm:w-auto">
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> Download CV
            </button>
          </a>
          <Link href="/myExperience">
            <span className="flex items-center justify-center border border-gray-500 text-gray-400 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-full w-full sm:w-auto">
              See Experience
            </span>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full mb-[4rem] max-w-sm mt-8 md:mt-0">
        <Image
          src="/images/f9603780-1942-4c14-af04-ebc5d1b523ad.jpg" // The image source path
          alt="profile-pic"
          className="rounded-lg shadow-lg object-cover object-center w-full h-auto"
          width={500}  // Set the width
          height={500} // Set the height
        />
      </div>
    </div>
  );
}
