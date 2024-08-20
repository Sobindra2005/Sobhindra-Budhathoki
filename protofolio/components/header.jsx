import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <nav className=" sticky top-0  border border-gray-500 lg:text-lg capitalize m-auto bg-black lg:w-[50rem] p-2 px-5  items-center  rounded-3xl">
      <ul className="flex justify-between  text-gray-700">
        <li className="cursor-pointer navBar hover:text-white ">home</li>
        <li className="cursor-pointer navBar hover:text-white ">about</li>
        <li className="cursor-pointer navBar hover:text-white ">
          recent works
        </li>
        <li className="cursor-pointer navBar hover:text-white ">blogs</li>
        <li className="cursor-pointer flex space-x-6  hover:text-white ">
          <span className="navBar">get in touch</span>

          <div className="flex space-x-2">
            <div className="cursor-pointer hover:text-white text-blue-400 ">
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div className="cursor-pointer hover:text-white text-blue-400 ">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="cursor-pointer hover:text-white text-gray-400 ">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="cursor-pointer hover:text-white text-gray-300 ">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
