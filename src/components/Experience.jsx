import React from 'react';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Qualitest',
        duration: 'Dec 2022 - Present',
        projects: [
            `Worked on the AccelRx project, a healthcare application, where I collaborated with the team to implement new functionalities, enhancing the user experience and application capabilities.`,
            `Contributed to the NSA Insights and Analytics project, developing a new frontend application. I integrated various charts like line, bar, and scatter using react-chartjs-2 and utilized Sankey chart from Google Charts.`,
            `Developed QTAP, an internal DevOps assessment tool, where I was responsible for creating a robust frontend using React.js and handling backend functionalities with Express.js, significantly improving the application's usability.`,
            `Worked on COCO, a project focused on Test Development Life Cycle (TDLC) using Mistral AI, where I implemented critical frontend features using React.js that streamlined the testing process.`
        ]
    },
    {
        title: 'Senior Analyst',
        company: 'Capgemini',
        duration: 'July 2021 - June 2022',
        projects: [
            `Collaborated with the team on the development of new functionalities for the NAAS system and the Control-M dashboard. This included creating widget-based React components to enhance the modularity and reusability within Cisco's applications.`
        ]
    },
    {
        title: 'Frontend Developer',
        company: 'Infomania Technology Solutions',
        duration: 'June 2019 - May 2021',
        projects: [
            `Initiated my professional journey at Infomania Technology Solutions, acquiring essential skills in React and frontend development. This foundational phase was enriched through my involvement in developing EduSphere.`
        ]
    }
];

const Experience = () => {
    return (
        <div className="bg-gray-900 text-white py-16 px-10">
            <div className="text-left mb-12">
                <h3 className="inline-block bg-blue-800 px-4 py-1 text-sm font-semibold tracking-wide uppercase">
                    Experience
                </h3>
                <h2 className="text-4xl mt-4">
                    <span className="text-white">My Work</span>{" "}
                    <span className="text-blue-500">Experience</span>
                </h2>
            </div>
            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/3 bg-blue-900 p-6 flex flex-col justify-start">
                                <h4 className="text-lg font-semibold text-white">{experience.title}</h4>
                                <p className="text-md text-blue-200">{experience.company}</p>
                                <p className="text-md text-blue-200 mb-4">{experience.duration}</p>
                                <div className="bg-blue-500 text-white text-center py-1 px-2 rounded-full w-24">
                                    Full Time
                                </div>
                            </div>
                            <div className="md:w-2/3 p-6 space-y-4">
                                {experience.projects.map((project, projectIndex) => (
                                    <p key={projectIndex} className="text-base text-gray-300">
                                        {project}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
