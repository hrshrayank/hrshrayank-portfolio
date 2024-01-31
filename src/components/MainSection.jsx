import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink
import PORTFOLIO from '../assets/mainportfolio.png'

const MainSection = () => {
    return (
        <Box 
            sx={{
                flexGrow: 1,
                height: '100vh',
                backgroundColor: '#050c16',
                padding: 4,
                display: 'flex',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3" gutterBottom sx={{ fontSize: '3rem' }}>
                            Hi. I'm Shrayank
                        </Typography>
                        <Typography variant="h2" gutterBottom sx={{ fontSize: '4rem' }}>
                            Frontend Developer
                        </Typography>
                        <Link to="/#contact" smooth style={{ textDecoration: 'none' }}> {/* Use HashLink for smooth scroll */}
                            <Button variant="contained" sx={{ bgcolor: '#0788ff', '&:hover': { bgcolor: '#0568cc' }, fontSize: '1.2rem' }}>
                                GET IN TOUCH
                            </Button>
                        </Link>
                        {/* Include social media icons here */}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box component="img" 
                        sx={{
                            height: 'auto', 
                            width: '100%',
                            maxWidth: '500px',
                            display: 'block',
                            ml: 'auto'
                        }} 
                        alt="H R Shrayank" 
                        src={PORTFOLIO}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default MainSection;
