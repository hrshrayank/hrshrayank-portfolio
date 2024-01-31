// Project.jsx
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const projects = [
    {
        title: 'Project Name',
        description: 'Brief description of your project.',
        image: 'https://shrayank-portfolio.netlify.app/images/cnn.gif',
        githubUrl: 'https://github.com/yourusername/projectname',
        liveDemoUrl: 'http://projectliveurl.com'
    },
    
    // ... add more projects here
];

const Project = () => {
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
                                <Button size="small" color="primary" href={project.githubUrl} target="_blank">
                                    <ArrowForwardIosIcon />
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* Pagination Dots */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                {/* ... Your pagination component or dots ... */}
            </Box>
        </Box>
    );
};

export default Project;
