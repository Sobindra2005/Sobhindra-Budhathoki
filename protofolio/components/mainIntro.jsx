import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Mainintro() {
  return (
    <div className="flex flex-col md:flex-row  justify-around items-center md:items-between cursor-pointer">
      <div className="flex flex-col items-start mt-12 justify-center">
        <h1 className="text-lg text-gray-400">
          {" Hi, I'm"}
          <span className="pl-1 text-gray-400 text-[27px] md:text-[40px] font-bebas-neue font-bold">
            {" Sobhindra Budhathoki!"}
          </span>
        </h1>
        <div className="h-auto max-w-[35rem] mt-3 text-md  md:text-lg text-gray-400 leading-[1.4] ">
          {
            "A tech enthusiast driven by curiosity and a love for learning with a passion for exploring new technologies and transforming them into creative solutions."
          }
        </div>
        <div className="flex w-full justify-between mt-4">
          <button className="border text-sm sm:text-lg border-gray-500 text-gray-400 p-1 px-2 hover:bg-blue-600 hover:text-white rounded-full w-[48%] ">
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </button>
          <button className="border border-gray-500 p-1 px-2 rounded-full w-[48%] text-gray-200 sm:text-lg hover:border-blue-900  text-sm  hover:bg-blue-600 hover:text-white bg-slate-900">
            See Experience
          </button>
        </div>
      </div>
      <div className="w-[12rem] h-[12rem] sm:w-[17rem] sm:h-[17rem]  mt-12  md:mt-0 md:mr-[3rem]">
        <Image
          width={300}
          height={300}
          src="/images/profile-sob-inhance.png"
          className="object-cover object-center"
          alt="profile-pic"
        />
      </div>
    </div>
  );
}
