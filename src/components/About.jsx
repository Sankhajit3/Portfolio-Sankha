import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaPalette,
} from "react-icons/fa";

function About() {
  const [activeSection, setActiveSection] = useState("education");

  const sections = [
    { id: "education", label: "Education", icon: <FaGraduationCap /> },
    { id: "mission", label: "Mission", icon: <FaBriefcase /> },
    { id: "skills", label: "Programming Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "interests", label: "Interests", icon: <FaPalette /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "education":
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-orange-600">Education</h2>
            <ul className="mt-4 space-y-6 text-gray-700">
              <li>
                <span className="font-semibold">Bachelor of Technology</span> in
                Computer Science, GMIT, 2021-2025
                <p className="text-gray-600 mt-1">
                  Courses include Data Structures, Algorithms, Database Management Systems, and Operating Systems.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  MERN Stack Development Course
                </span>
                , EuphoriaGenx, 2024
                <p className="text-gray-600 mt-1">
                  Gained hands-on experience in creating full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                </p>
              </li>
              <li>
                <span className="font-semibold">
                  Certification in Java Spring Boot
                </span>
                , EuphoriaGenx, 2023
                <p className="text-gray-600 mt-1">
                  Built enterprise-grade backend services using Spring Boot and Hibernate for database management.
                </p>
              </li>
            </ul>
          </div>
        );
      case "mission":
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-orange-600">Mission</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              My mission is to leverage my technical expertise, problem-solving
              skills, and creativity to deliver innovative digital solutions that
              empower businesses and enhance user experiences. I strive to build
              scalable and efficient applications that make a tangible impact on
              society while continuously improving my knowledge and skills in
              emerging technologies.
            </p>
            <h3 className="mt-6 text-lg font-semibold text-gray-800">
              Key Goals:
            </h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
              <li>Foster innovation by developing cutting-edge solutions.</li>
              <li>
                Collaborate with cross-functional teams to bring ideas to life.
              </li>
              <li>
                Pursue continuous learning to stay ahead in the tech industry.
              </li>
            </ul>
          </div>
        );
      case "skills":
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-orange-600">
              Programming Skills
            </h2>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              Core Skills:
            </h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
              <li>Proficient in JavaScript, React, Node.js, MongoDB, and Express.js</li>
              <li>Experienced in Java, Spring Boot, and Hibernate</li>
              <li>Skilled in developing RESTful APIs and microservices</li>
              <li>Strong problem-solving and debugging skills</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-gray-800">
              Tools & Frameworks:
            </h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
              <li>Version Control: Git, GitHub</li>
              <li>Build Tools: Webpack, Babel</li>
              <li>Testing: Jest, Mocha, Cypress</li>
              <li>UI Libraries: Tailwind CSS, Bootstrap</li>
            </ul>
          </div>
        );
      case "projects":
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-orange-600">Projects</h2>
            <ul className="mt-4 space-y-6 text-gray-700">
              <li>
                <span className="font-semibold">Job Portal:</span>{" "}
                Built a feature-rich Job portal using the MERN stack with user
                authentication, job posting, and an admin panel for job management.
              </li>
              <li>
                <span className="font-semibold">E-Commerce Platform:</span>{" "}
                Developed a responsive e-commerce site with a payment gateway, user-friendly navigation, and a dashboard for inventory management.
              </li>
              <li>
                <span className="font-semibold">Chat Application:</span>{" "}
                Created a real-time chat application using Java Spring Boot, WebSocket, and Socket.IO, featuring private messaging and group chats.
              </li>
              <li>
                <span className="font-semibold">Portfolio Website:</span>{" "}
                Designed and deployed a personal portfolio showcasing projects,
                skills, and achievements using React and Tailwind CSS.
              </li>
            </ul>
          </div>
        );
      case "interests":
        return (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-semibold text-orange-600">Interests</h2>
            <ul className="mt-4 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Teaching:</span> Sharing
                knowledge and mentoring aspiring developers.
              </li>
              <li>
                <span className="font-semibold">Music:</span> Exploring
                playlists for relaxation and inspiration.
              </li>
              <li>
                <span className="font-semibold">Competitive Gaming:</span>{" "}
                Engaging in football games and improving reflexes.
              </li>
              <li>
                <span className="font-semibold">Reading:</span> Exploring books
                on technology, productivity, and personal growth.
              </li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div id="About" className="max-w-screen-2xl mx-auto px-4 md:px-10 my-20 mb-30">
      {/* Top Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">About Me</h1>
        <p className="text-gray-500 mt-2 dark:text-gray-500">My formal Bio Details</p>
        <div className="border-t-4 border-orange-500 w-16 mx-auto mt-4"></div>
      </div>

      {/* Main Section: Sidebar and Content */}
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-800 text-white rounded-lg shadow-lg p-6 space-y-4 mb-6 md:mb-0">
          <ul className="space-y-4">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-orange-500 text-white"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setActiveSection(section.id)}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="font-medium">{section.label}</span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="w-full md:w-3/4 bg-white dark:bg-gray-300 rounded-lg shadow-lg p-8 ml-6">
          {renderContent()}
        </div>
      </div>

    </div>
  );
}

export default About;
