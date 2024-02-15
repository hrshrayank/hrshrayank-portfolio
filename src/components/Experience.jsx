import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Qualitest Infotech Private Limited',
        duration: 'Dec 2022 - Present',
        project1: `+ Collaborated with the team to implement new frontend application for NSA
            project, enhancing the application's capabilities and user experience. Integrated charts like line, bar,
            scatter using react-chartjs-2 and used Sankey chart from google-charts.`,
        project2: `+ Collaborated with the team to implement new functionalities in the AccelRx
        project, enhancing the application's capabilities and user experience.`
    },
    {
        title: 'Senior Analyst',
        company: 'Capgemini',
        duration: 'July 2021 - June 2022',
        project1: `+ Collaborated with the team on the development of new functionalities for
        the NAAS system and the Control-M dashboard. This included creating widget-based React
        components to enhance the modularity and reusability within Cisco's applications.`
    },
    {
        title: 'Frontend Developer',
        company: 'Infomania Technology Solutions',
        duration: 'June 2019 - May 2021',
        project1: `+ Initiated my professional journey at Infomania Technology Solutions, acquiring
        essential skills in React and frontend development. This foundational phase was enriched through my
        involvement in developing EduSphere.`
    }
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
                                <Grid item xs={12} md={3} sx={{ bgcolor: 'rgba(0, 51, 102, 0.85)', p: 2 }}>
                                    <Typography variant="h6" sx={{ color: 'white' }}>{experience.title}</Typography>
                                    <Typography variant="subtitle1" sx={{ color: 'white' }}>{experience.company}</Typography>
                                    <Typography variant="subtitle2" sx={{ color: 'white', mb: 1 }}>{experience.duration}</Typography>
                                    <Box sx={{ bgcolor: 'white', color: '#0788ff', textAlign: 'center', py: 0.2, fontSize: '12px', width: '50%' }}>
                                        <Typography variant="overline">Full Time</Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={9} sx={{ pl: 2 }}>
                                    <Typography variant="subtitle1" gutterBottom sx={{ color: 'white',fontSize: '1.6rem' }}>About Company</Typography>
                                    <Typography variant="body2" sx={{ color: 'white', fontSize: '1rem' }}>{experience.project1}</Typography>
                                    <Typography variant="body2" sx={{ color: 'white', fontSize: '1rem' }}>{experience.project2}</Typography>

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
