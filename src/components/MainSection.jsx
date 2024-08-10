import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const MainSection = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 p-8 text-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12">
                <div className="text-center md:text-left">
                    <h4 className="text-3xl md:text-4xl font-semibold text-blue-400 mb-4">
                        Hi There,
                    </h4>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 leading-tight shadow-sm">
                        I'm Shrayank,
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight shadow-sm">
                        Web Developer
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                        I specialize in crafting high-quality web applications using modern technologies. Let's collaborate to create something outstanding.
                    </p>
                    <div className="flex justify-center md:justify-start mb-8 space-x-4">
                        <a href="https://www.linkedin.com/in/hrshrayank/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/hrshrayank" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://twitter.com/hrshrayank77" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                            <FaTwitter size={30} />
                        </a>
                        <a href="mailto:hrshrayank77@gmail.com" className="text-blue-400 hover:text-blue-600">
                            <FaEnvelope size={30} />
                        </a>
                    </div>
                    <ScrollLink
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <button className="bg-blue-400 text-gray-900 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 text-lg">
                            Get in Touch
                        </button>
                    </ScrollLink>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img 
                        className="w-full max-w-sm"
                        src="https://s3-inventorymanagement1.s3.ap-south-1.amazonaws.com/dashboard.png"
                        alt="Shrayank"
                    />
                </div>
            </div>
        </div>
    );
};

export default MainSection;
