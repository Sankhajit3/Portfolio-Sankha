import React, { useState } from "react";
import jobportal from "../../public/job-portal.webp";
import ecommerce from "../../public/ecommercer.jpg";
import whatsapp from "../../public/whatsapp.jpg";

function Project() {
  const projects = [
    {
      id: 1,
      img: jobportal,
      name: "Job portal with admin panel",
      description:
        "A feature-rich job portal that allows users to search for jobs, apply online, and manage their profiles. The admin panel enables administrators to manage job postings, monitor applications, and generate analytics. Built with ReactJS, Node.js, Express, and MongoDB, the platform ensures seamless user experience and efficient data handling.",
      sourceCode: "https://github.com/Sankhajit3?tab=repositories",
    },
    {
      id: 2,
      img: ecommerce,
      name: "Ecommerce website with admin panel",
      description:
        "A dynamic eCommerce platform where users can browse products, add items to their cart, and complete purchases securely. The admin panel allows product management, order tracking, and sales analytics. Developed using ReactJS, Node.js, Express, and MongoDB, the application ensures scalability and high performance.",
      sourceCode: "https://github.com/Sankhajit3?tab=repositories",
    },
    {
      id: 3,
      img: whatsapp,
      name: "Chat Application",
      description: "A real-time chat application developed with Java Spring Boot for backend and efficient message handling. The platform supports one-on-one messaging, group chats, and secure communication with end-to-end encryption. It is designed to be fast, reliable, and scalable, suitable for personal or team communication.",
      sourceCode: "https://github.com/Sankhajit3?tab=repositories",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const paginatedProjects = projects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      name="Project"
      className="max-w-screen-2xl container mx-auto px-4 md:px-12 mt-10"
    >
      <div>
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {paginatedProjects.map(
            ({ id, img, name, description, sourceCode }) => (
              <div
                className="max-w-md mx-auto border-2 border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 bg-white overflow-hidden flex flex-col justify-between animate__animated animate__fadeIn animate__delay-1s dark:bg-gray-300"
                key={id}
              >
                <img
                  src={img}
                  className="w-full h-48 object-cover"
                  alt={name}
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h2 className="text-xl font-semibold text-center text-gray-700">
                    {name}
                  </h2>
                  <p className="text-gray-500 text-center mt-4 text-sm leading-relaxed">
                    {description}
                  </p>
                  <div className="flex justify-center mt-6 gap-3 sm:gap-4">
                    <a
                      href={sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-500 hover:bg-red-600 text-white font-bold px-5 py-2 rounded-lg shadow-md transition-all"
                    >
                      Source Code
                    </a>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-5 py-2 rounded-lg shadow-md transition-all">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex justify-between items-center mt-8 sm:mt-12">
          <button
            onClick={handlePrevPage}
            className={`${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400"
            } text-gray-700 font-bold py-2 px-6 rounded-lg shadow-md transition-all dark:bg-red-500 dark:text-white`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-gray-600 font-medium dark:text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className={`${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400"
            } text-gray-700 font-bold py-2 px-6 rounded-lg shadow-md transition-all dark:bg-red-500 dark:text-white`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
