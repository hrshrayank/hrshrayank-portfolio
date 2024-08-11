import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (section) => {
    setActiveSection(section);
    setMobileOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: 'home' },
    { title: 'About', path: 'about' },
    { title: 'Skills', path: 'skills' },
    { title: 'Experience', path: 'experience' },
    { title: 'Projects', path: 'projects' },
    { title: 'Contact', path: 'contact' },
  ];

  const drawer = (
    <div className="flex flex-col items-center space-y-4">
      {navLinks.map((item, index) => (
        <ScrollLink
          key={index}
          to={item.path}
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => handleNavigation(item.title)}
          className="w-full text-center py-2 text-white hover:bg-gray-700 transition duration-300"
        >
          {item.title}
        </ScrollLink>
      ))}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-black shadow-none z-50">
      <div className="container mx-auto flex items-center justify-between px-4 cursor-pointer">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-70}
          className="text-white"
        >
          <img src="https://i.ibb.co/Kqms1vK/logo.jpg" alt="Logo" className="h-16" />
        </ScrollLink>
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.path}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => handleNavigation(item.title)}
              className={`${
                activeSection === item.title ? 'border-b-2 border-white' : ''
              } text-white transition duration-300 px-3`}
            >
              {item.title}
            </ScrollLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={handleDrawerToggle} className="text-white">
            <MenuIcon />
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-black text-white p-4">
          {drawer}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
