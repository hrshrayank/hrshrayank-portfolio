import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const AboutMe = () => {
    return (
        <Box sx={{ bgcolor: '#06223a', color: 'white', py: 8, px: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box
                        component="img"
                        sx={{
                            borderRadius: '50%',
                            width: '100%',
                            maxWidth: 300,
                            height: 'auto',
                        }}
                        alt="Shrayank"
                        src="https://shrayank-portfolio.netlify.app/images/avatar.png"
                    />
                </Grid>
                <Grid item xs={12} md={6} sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{ color: '#0788ff' }}>
                        ABOUT ME
                    </Typography>
                    <Typography variant="h3" gutterBottom sx={{ color: 'white', mb: 4 }}>
                        FRONTEND DEVELOPER
                    </Typography>
                    <Typography variant="body1" paragraph>
                        {/* Update this paragraph with information from your resume */}
                        Passionate Frontend Developer with 4+ years of experience in building and maintaining responsive websites. Proficient in HTML, CSS, JavaScript; plus modern libraries and frameworks like React.js and Redux.
                    </Typography>
                    {/* Add more paragraphs as needed based on your resume */}
                    
                    <Button 
                        variant="contained" 
                        sx={{ bgcolor: '#0788ff', mt: 4 }}
                        href="https://drive.google.com/file/d/1GfrnsHZadG_UOJ7TNEvdWgtveENU-NB4/view?usp=drive_link" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Resume
                    </Button>
                    <Button 
                        variant="contained" 
                        sx={{ bgcolor: '#0788ff', mt: 4, ml:2 }}
                        href="https://drive.google.com/uc?export=download&id=1GfrnsHZadG_UOJ7TNEvdWgtveENU-NB4" 
                        download="H_R_Shrayank_Resume.pdf"
                    >
                        Download Resume
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;
