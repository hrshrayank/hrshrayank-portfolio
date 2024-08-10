import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
    <List>
      {navLinks.map((item, index) => (
        <ListItem button key={index} onClick={handleDrawerToggle}>
          <ScrollLink
            to={item.path}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
          >
            <ListItemText primary={item.title} />
          </ScrollLink>
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" style={{ background: '#000', boxShadow: 'none' }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='left'
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <ScrollLink to="home" smooth={true} duration={500} offset={-70} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src="https://i.ibb.co/Kqms1vK/logo.jpg" alt="Logo" style={{ maxHeight: '64px' }} />
            </ScrollLink>
            <div style={{ display: 'flex', gap: '8px' }}>
              {navLinks.map((item, index) => (
                <Button 
                  color="inherit" 
                  key={index} 
                  onClick={() => handleNavigation(item.title)}
                  sx={{
                    borderBottom: activeSection === item.title ? '3px solid white' : 'none',
                    transition: 'border-bottom 0.3s',
                    padding: '6px 8px', 
                  }}
                >
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {item.title}
                  </ScrollLink>
                </Button>
              ))}
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
