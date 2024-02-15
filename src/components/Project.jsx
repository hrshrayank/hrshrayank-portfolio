import React from 'react';
import { Box, Typography, Button, Grid, Card,IconButton, CardContent, CardActions, CardMedia, Dialog, DialogContent } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import ArticleIcon from '@mui/icons-material/Article'; 
import Project1 from '../assets/Projects/Project1/Project1.png';
import Project2 from '../assets/Projects/Project2/Project2.png';  
import Project3 from '../assets/Projects/Project3/Project3.png';  
import Project4 from '../assets/Projects/Project4/Project4.png';


const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase development projects and skills.',
      image: Project1,
      githubUrl: 'https://github.com/hrshrayank/hrshrayank-portfolio',
      liveDemoUrl: 'https://shrayank.com/',
      blogUrl: '#', 
      skills: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      ],
    },
    {
      title: 'Global Dock',
      description: 'Global Dock is a export import company website.',
      image: Project2,
      githubUrl: 'https://github.com/hrshrayank/Global-Dock',
      liveDemoUrl: 'https://globaldock.netlify.app/',
      blogUrl: '#', 
      skills: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      ],
    },
    {
      title: 'Boat Website',
      description: `Boat is India's Audio Company website.`,
      image: Project3,
      githubUrl: 'https://github.com/hrshrayank/Boat-Clone',
      liveDemoUrl: 'https://boat-clone.vercel.app/',
      blogUrl: 'https://hrshrayank.medium.com/boat-clone-collab-project-in-3-days-aeea867a87e7', 
      skills: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      ],
    },
    {
      title: 'CNN News Clone',
      description: 'CNN is International news website.We have tried implementing searching of news ,images change on the click and filtering,changing languages .',
      image: Project4,
      githubUrl: 'https://github.com/MaheshFSD/ethane',
      liveDemoUrl: 'https://cnn-clone-web.netlify.app/',
      blogUrl: '#', 
      skills: [
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Material-UI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
      ],
    }
  ];
  const Project = () => {
    return (
      <Box sx={{ bgcolor: '#051e37', color: 'white', py: 8, px: 4, overflowX: 'auto' }}>
        <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
          MY WORK
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4 }}>
          <Box component="span" sx={{ color: 'white' }}>RECENT </Box>
          <Box component="span" sx={{ color: '#0788ff', px: 1 }}>PROJECTS</Box>
        </Typography>
        <Grid container spacing={4} sx={{ justifyContent: 'start',pr: 2  }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ bgcolor: 'white', height: '100%', display: 'inline-block', minWidth: '300px' }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ maxHeight: 200, objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ textAlign: 'center' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, mt: 2 }}>
                    {project.skills.map((skill, skillIndex) => (
                      <img key={skillIndex} src={skill.logo} alt={skill.name} style={{ height: '25px' }} />
                    ))}
                  </Box>
                </CardContent>
                <CardActions disableSpacing sx={{ justifyContent: 'center', paddingBottom: 2 }}>
                  <Button href={project.githubUrl} target="_blank" startIcon={<GitHubIcon />} sx={{ color: 'black', '&:hover': { backgroundColor: 'white' } }}>
                    GitHub
                  </Button>
                  <Button href={project.liveDemoUrl} target="_blank" startIcon={<LanguageIcon />} sx={{ color: 'black', '&:hover': { backgroundColor: 'white' } }}>
                    Website
                  </Button>
                  <Button href={project.blogUrl} target="_blank" startIcon={<ArticleIcon />} sx={{ color: 'black', '&:hover': { backgroundColor: 'white' } }}>
                    Blog
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
         <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            href="https://github.com/hrshrayank"
            target="_blank"
            variant="contained"
            sx={{ color: 'white', backgroundColor:'#063d70', '&:hover': { backgroundColor: '#063d70' } }}
            startIcon={<GitHubIcon />}
          >
            See More
          </Button>
        </Grid>
              
        </Grid>
      </Box>
    );
  };

export default Project;