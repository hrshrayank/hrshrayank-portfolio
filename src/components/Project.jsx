import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card,IconButton, CardContent, CardActions, CardMedia, Dialog, DialogContent } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

const projects = [
    {
      title: 'E-commerce Website',
      description: 'An e-commerce platform with a responsive design and secure payment integration.',
      image: 'https://via.placeholder.com/300.png?text=Project+1',
      githubUrl: 'https://github.com/yourusername/ecommerce-website',
      liveDemoUrl: 'http://ecommercewebsite.com',
      additionalImages: [] // No additional images
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase development projects and skills.',
      image: 'https://via.placeholder.com/300.png?text=Project+2',
      githubUrl: 'https://github.com/yourusername/portfolio-website',
      liveDemoUrl: 'http://portfoliowebsite.com',
      additionalImages: [] // No additional images
    },
    {
      title: 'Social Media Dashboard',
      description: 'A dashboard for visualizing social media metrics with real-time data analytics.',
      image: 'https://via.placeholder.com/300.png?text=Project+3',
      githubUrl: 'https://github.com/yourusername/social-media-dashboard',
      liveDemoUrl: 'http://socialmediadashboard.com',
      additionalImages: [ // Multiple images
        'https://via.placeholder.com/300.png?text=Project+3+Image+2',
        'https://via.placeholder.com/300.png?text=Project+3+Image+3',
        'https://via.placeholder.com/300.png?text=Project+3+Image+4'
      ]
    },
    {
      title: 'Task Management Tool',
      description: 'A tool to manage tasks effectively with collaboration features for teams.',
      image: 'https://via.placeholder.com/300.png?text=Project+4',
      githubUrl: 'https://github.com/yourusername/task-management-tool',
      liveDemoUrl: 'http://taskmanagementtool.com',
      additionalImages: [] // No additional images
    }
  ];
  
  const ProjectDetailDialog = ({ project, open, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [project.image, ...project.additionalImages];
  
    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
  
    return (
        <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
        <DialogContent sx={{ minHeight: '60vh', position: 'relative', overflow: 'hidden' }}>
          <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}>
            <CloseIcon />
          </IconButton>
          <IconButton
            onClick={handlePrevImage}
            disabled={images.length <= 1}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              color: 'white',
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            onClick={handleNextImage}
            disabled={images.length <= 1}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              color: 'white',
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <img
                src={images[currentImageIndex]}
                alt={project.title}
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" sx={{ mb: 2 }}>
                {project.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {project.description}
              </Typography>
              {/* Add more fields as per your design */}
              <Typography variant="body2"><strong>Type:</strong> Website</Typography>
              <Typography variant="body2"><strong>Languages:</strong> PHP, HTML, CSS, JS</Typography>
              <Typography variant="body2"><strong>Platform:</strong> WordPress</Typography>
              <Typography variant="body2"><strong>Country:</strong> USA</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Visit Live Site
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    );
  };
const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = (project) => {
        setSelectedProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    return (
        <Box sx={{ bgcolor: '#051e37', color: 'white', py: 8, px: 4 }}>
             <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
                MY WORK
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4}}>
                <Box component="span" sx={{ color: 'white' }}>RECENT </Box>
                <Box component="span" sx={{ color: '#0788ff', px: 1 }}>PROJECT</Box>
            </Typography>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ bgcolor: 'white', height: '100%' }}>
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.title}
                                sx={{ maxHeight: 200, objectFit: 'cover' }}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing sx={{ justifyContent: 'flex-end', pr: 2 }}>
                                <Button 
                                    size="small" 
                                    onClick={() => handleOpenDialog(project)}
                                    sx={{
                                        borderRadius: '50%',
                                        minWidth: '48px',
                                        height: '48px',
                                        backgroundColor: '#098af6',
                                        color: 'white',
                                        border: '2px solid black',
                                        '&:hover': {
                                            backgroundColor: '#062c4c',
                                        }
                                    }}
                                >
                                    <ArrowForwardIosIcon />
                                </Button>
                            </CardActions>

                        </Card>
                    </Grid>
                ))}
            </Grid>
            {selectedProject && (
                <ProjectDetailDialog
                    project={selectedProject}
                    open={openDialog}
                    onClose={handleCloseDialog}
                />
            )}
            {/* Pagination Dots */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                {/* ... Your pagination component or dots ... */}
            </Box>
        </Box>
    );
};

export default Project;
