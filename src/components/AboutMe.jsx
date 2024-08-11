import React from "react";
import Profile from "../assets/profile.png";

const AboutMe = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={Profile}
            alt="Shrayank"
            className="rounded-full w-full max-w-xs"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h5 className="text-blue-500 text-lg mb-4">ABOUT ME</h5>
          <h3 className="text-4xl font-bold mb-6">WEB DEVELOPER</h3>
          <p className="text-base leading-relaxed mb-6">
            Skilled Web Developer with over 4 years of hands-on experience in
            designing and enhancing interactive web applications. Demonstrated
            expertise across sectors like healthcare and e-commerce. Skilled in
            collaborating with diverse teams, navigating complex projects, and
            adapting to changing requirements.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://drive.google.com/file/d/1GfrnsHZadG_UOJ7TNEvdWgtveENU-NB4/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              View Resume
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1GfrnsHZadG_UOJ7TNEvdWgtveENU-NB4"
              download="H_R_Shrayank_Resume.pdf"
              className="bg-blue-500 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
