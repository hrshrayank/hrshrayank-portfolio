import React, { useState } from "react";
import { FaGithub, FaGlobe, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Trip Planner",
    description:
      "The Trip Planner Website is an intuitive web application designed to streamline travel planning. Leveraging technologies like Google Places API, Google Gemini, Google OAuth, and Firebase, it allows users to create, manage, and share their travel itineraries with ease.",
    images: [
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/trip-planner/tripplanner-1.png",
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/trip-planner/tripplanner-2.png",
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/trip-planner/tripplanner-3.png",
    ],
    githubUrl: "https://github.com/hrshrayank/trip-planner-website",
    liveDemoUrl: "https://trip-planner-website-seven.vercel.app/",
    skills: [
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/tailwind-css.png",
      },
      {
        name: "Firebase",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Gemini",
        logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/Gemini.png",
      },
    ],
  },
  {
    title: "Blogging Website",
    description:
      "A full-stack blogging platform built with modern technologies. The backend, written in TypeScript, utilizes Prisma and is hosted on Cloudflare. The common package leverages Zod for validation shared across the frontend and backend. The frontend is powered by Vite and Typescipt, providing a fast and responsive user interface.",
    images: [
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/blogging/blogging-1.png",
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/blogging/blogging-2.png",
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/blogging/blogging-3.png",
    ],
    githubUrl: "https://github.com/hrshrayank/blogging-website",
    liveDemoUrl: "https://blogging-website-two-rho.vercel.app",
    skills: [
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/tailwind-css.png",
      },
      {
        name: "Prisma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "Hono",
        logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/hono-title.png",
      },
    ],
  },
  {
    title: "Inventory Management",
    description:
      "A static website with a full-stack approach. The backend, hosted on AWS EC2, manages data with Express.js and Prisma. The frontend, built with React and Tailwind CSS, is hosted on AWS Amplify. This project efficiently handles inventory management with a responsive interface and seamless AWS integration.",

    images: [
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/inventory/inventory-1.png",
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/inventory/inventory-2.png",
      "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/inventory/inventory-3.png",
    ],
    githubUrl: "https://github.com/hrshrayank/inventory-management",
    liveDemoUrl: "https://main.d3639njs234cyu.amplifyapp.com/",
    skills: [
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/tailwind-css.png",
      },
      {
        name: "Prisma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "AWS",
        logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/aws.png",
      },
    ],
  },
];

const Project = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    projects.map(() => 0)
  );

  const handleNextImage = (index, images) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % images.length : imgIndex
      )
    );
  };

  const handlePrevImage = (index, images) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((imgIndex, i) =>
        i === index
          ? imgIndex === 0
            ? images.length - 1
            : imgIndex - 1
          : imgIndex
      )
    );
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-10">
      <div className="text-left mb-12">
        <h3 className="inline-block bg-blue-800 px-4 py-1 text-sm font-semibold tracking-wide uppercase">
          My Work
        </h3>
        <h2 className="text-4xl mt-4">
          <span className="text-white">Recent</span>{" "}
          <span className="text-blue-500">Projects</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <div className="relative">
              <img
                src={project.images[currentImageIndexes[index]]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => handlePrevImage(index, project.images)}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => handleNextImage(index, project.images)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              >
                <FaArrowRight />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center mb-4">
                {project.skills.map((skill, skillIndex) => (
                  <img
                    key={skillIndex}
                    src={skill.logo}
                    alt={skill.name}
                    className="h-8 mx-2"
                  />
                ))}
              </div>
              <div className="flex justify-center space-x-4 border-t pt-3 border-slate-300">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-500"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-blue-500"
                >
                  <FaGlobe size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/hrshrayank"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          See More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
