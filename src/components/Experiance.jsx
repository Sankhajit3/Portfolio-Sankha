import React from "react";
import css from "../../public/css.jpg";
import html from "../../public/html.png";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import mysql from "../../public/mysql-database.png";
import nodejs from "../../public/node-js.png";
import mongodb from "../../public/mongodb.png";
import springBoot from "../../public/springBoot.jpg";
import express from "../../public/express.png";

function Experiance() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: java, name: "Java" },
    { id: 4, logo: javascript, name: "JavaScript" },
    { id: 5, logo: mongodb, name: "MongoDB" },
    { id: 6, logo: springBoot, name: "Spring Boot" },
    { id: 7, logo: mysql, name: "MySQL" },
    { id: 8, logo: nodejs, name: "Node.js" },
    { id: 9, logo: express, name: "Express.js" },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mb-30"
    >
      <div>
        <h1 className="text-4xl font-bold mb-5 text-center text-gray-800 dark:text-white">
          My Experience
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10 dark:text-gray-300">
          I have more than 2 years of experience in the technologies listed
          below.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-xl shadow-lg p-4 cursor-pointer 
              transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 dark:border-gray-600"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] rounded-full object-contain transition-transform transform hover:scale-110"
                alt={name}
              />
              <div className="text-lg font-semibold text-gray-800 mt-3 dark:text-white text-center">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
