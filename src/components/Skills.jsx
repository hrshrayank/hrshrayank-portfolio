import React from "react";

const frontendSkills = [
  {
    name: "React JS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/tailwind-css.png",
  },
  {
    name: "MUI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
  },
  {
    name: "Shadcn",
    logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/shadcn.png",  // Placeholder for Shadcn logo
  },
];

const backendSkills = [
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Hono",
    logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/hono-title.png",  // Placeholder for Hono logo
  },
];

const deploymentSkills = [
  {
    name: "AWS",
    logo: "https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/aws.png",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "CI/CD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",  // Using GitHub logo as a placeholder for CI/CD
  },
  // {
  //   name: "Kubernetes",
  //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  // },
];

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-10">
      <div className="text-left">
        <h3 className="bg-blue-900 inline-block px-3 py-1 text-sm font-semibold uppercase tracking-wide">
          Skills
        </h3>
        <h2 className="text-3xl mt-4 mb-8">
          <span className="text-white">My</span>{" "}
          <span className="text-blue-400">Skills</span>
        </h2>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl text-blue-400 mb-4">Frontend</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className="text-center transition-transform transform hover:scale-105"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 mx-auto mb-2"
              />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl text-blue-400 mb-4">Backend</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {backendSkills.map((skill, index) => (
            <div
              key={index}
              className="text-center transition-transform transform hover:scale-105"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 mx-auto mb-2"
              />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl text-blue-400 mb-4">Deployment</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {deploymentSkills.map((skill, index) => (
            <div
              key={index}
              className="text-center transition-transform transform hover:scale-105"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 mx-auto mb-2"
              />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
