import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export default function Mainintro() {
  return (
    <>
      <div className=" flex justify-around items-between cursor-pointer  ">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-lg text-gray-400 ">
            Hi, I'm
            <span className=" pl-1 text-gray-400 text-[40px] font-bebas-neue font-bold ">
              Sobhindra Budhathoki!
            </span>
          </h1>
          <div className="h-auto max-w-[35rem] text-lg text-gray-400 leading-[1.4] mt-3">
            A tech enthusiast driven by curiosity and a love for learning with a
            passion for exploring new technologies and transforming them into
            creative solutions.
          </div>
          <div className='flex w-full justify-between '>
         <button className='border border-gray-500 text-gray-400 p-1 px-2  hover:border-blue-900 rounded-full w-[48%] mt-2 hover:text-blue-800 '> <FontAwesomeIcon icon={faDownload} />  Download Cv</button>
         <button className='border border-gray-500 p-1 px-2  rounded-full w-[48%] mt-2 text-gray-200 hover:border-blue-900 hover:text-blue-900 bg-slate-900'>  See Experience </button>
        </div>
        </div>
        <div>
          <img
            src="/images/profile-sob-inhance.png"
            className="h-[15rem] mr-[4rem] "
            alt="profile-pic"
          />
        </div>
      </div>
    </>
  );
}
