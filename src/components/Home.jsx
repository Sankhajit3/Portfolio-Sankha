import React from "react";

import pic from "../../public/SankhaPhoto.jpeg";

import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaTelegram } from "react-icons/fa6";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";

import { FaDownload, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";


function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 mb-100"
      >
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-6 order-2 md:order-1">
            <span className="text-xl">Welcome To My Portfolio <span className="text-3xl">👋</span> </span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, <span className="md:">I'm a</span> </h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={30}
                backSpeed={40}
                loop={true}
              />
            </div>
            <br />
            <p className="text-lg md:text-md text-justify ">
              I'm <span className="text-red-500">Sankhajit Das</span> , a
              passionate full-stack developer with 2 years of experience in
              creating web applications. I specialize in JavaScript, React,
              Node.js, and building scalable, performant solutions. I'm
              constantly learning and embracing new technologies to improve my
              skills and create better user experiences. I am always excited
              about taking on new challenges and solving complex problems with
              innovative solutions.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div>
                <h1 className="font-bold text-center md:text-left">
                  Available on
                </h1>
                <ul className="flex justify-center md:justify-start space-x-4 mt-2">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-indigo-600 dark:bg-blue-600 dark:text-white" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sankhajit-das-ab8350248/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-indigo-600 dark:bg-blue-600 dark:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Sankhajit3" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-white" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-indigo-600 dark:bg-blue-600 dark:text-white" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Currently Working On */}
              <div>
                <h1 className="font-bold text-center md:text-left">
                  Currently working on
                </h1>
                <div className="flex justify-center md:justify-start space-x-4 mt-2">
                  <SiMongodb className="text-3xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-green-600 dark:text-green-600" />
                  <SiExpress className="text-3xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-gray-800" />
                  <FaReact className="text-3xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-blue-600 dark:text-blue-500" />
                  <FaNodeJs className="text-3xl cursor-pointer transition-all duration-300 hover:scale-125 hover:text-green-600 dark:text-green-600" />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-6 mt-15">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                  Hire Me
                </button>
              </Link>
              <a
                href="../../public/Sankha Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  // Trigger the download
                  const link = document.createElement("a");
                  link.href = "../../public/Sankha Resume.pdf";
                  link.download = "Sankha Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200 flex items-center">
                  <FaDownload className="mr-2" /> {/* Add the download icon */}
                  Download CV
                </button>
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center mt-8 order-1 md:mt-20 md:w-1/2 md:ml-12">
            <img
              src={pic}
              className="rounded-full w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] border-[5px] border-gray-300 shadow-lg"
              alt="Profile"
            />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
