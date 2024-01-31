import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#051b30', color: 'white', p: 3, textAlign: 'center', borderTop: '1px solid white' }}>
            <Typography variant="body2" color="inherit">
                © {new Date().getFullYear()} Shrayank. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
