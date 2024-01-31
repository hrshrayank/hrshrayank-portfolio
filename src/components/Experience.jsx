import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Qualitest Infotech Private Limited',
        duration: 'June 2020 - Present',
        description: 'Engaged in front-end development, focusing on React. Contributed to the NSA Insights and Analytics project, emphasizing feature development, design integration, and bug resolution. Streamlined the codebase and enhanced application performance, leveraging skills in React, Redux, JavaScript, and RESTful APIs.'
    },
    {
        title: 'Senior Analyst',
        company: 'Capgemini',
        duration: 'January 2020 - June 2020',
        description: 'Drove front-end development for the AccelRx project. Enhanced user interface and experience, ensuring high-quality code and design integration. Played a pivotal role in feature development and bug fixes, focusing on React and Redux.'
    },
    {
        title: 'Software Engineer',
        company: 'Infomania Technology Solutions',
        duration: 'June 2017 - January 2020',
        description: 'Initiated into professional software development, focusing on front-end technologies. Contributed significantly to the P&G project, honing skills in React, JavaScript, and collaborative development tools.'
    },
    // ... add more experiences here if needed
];

const Experience = () => {
    return (
        <Box sx={{ bgcolor: '#052441', color: 'white', py: 8, px: 4 }}>
            <Typography variant="subtitle1" gutterBottom align="center" sx={{ bgcolor: '#063d70', display: 'inline-block', px: 2 }}>
                EXPERIENCE
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ color: 'white', mt: 2, mb: 4 }}>
                <Box component="span" sx={{ color: 'white' }}>MY WORK </Box>
                <Box component="span" sx={{ color: '#0788ff', px: 1 }}>EXPERIENCE</Box>
            </Typography>
            <Grid container spacing={3}>
                {experiences.map((experience, index) => (
                    <Grid item xs={12} key={index}>
                        <Paper elevation={6} sx={{ bgcolor: '#052c50', p: 3 }}>
                            <Grid container>
                                <Grid item xs={12} md={3} sx={{ bgcolor: '#0788ff', p: 2 }}>
                                    <Typography variant="h6" sx={{ color: 'white' }}>{experience.title}</Typography>
                                    <Typography variant="subtitle1" sx={{ color: 'white' }}>{experience.company}</Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'white', mb: 1 }}>{experience.duration}</Typography>
                                    <Box sx={{ bgcolor: 'white', color: '#0788ff', textAlign: 'center', py: 0.2, fontSize: '12px', width: '50%' }}>
                                        <Typography variant="overline">Full Time</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={9} sx={{ pl: 2 }}>
                                    <Typography variant="subtitle1" gutterBottom sx={{ color: 'white',fontSize: '1.6rem' }}>About Company</Typography>
                                    <Typography variant="body2" sx={{ color: 'white', fontSize: '1rem' }}>{experience.description}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Experience;
