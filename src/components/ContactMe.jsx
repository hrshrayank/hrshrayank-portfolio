// ContactMe.jsx
import React from 'react';
import { Box, Typography, TextField, Button, Grid, Container, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactMe = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle form submission, like sending an email
    };

    const textFieldStyles = {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            // '& fieldset': {
            //     borderColor: 'white',
            // },
            // '&:hover fieldset': {
            //     borderColor: 'white',
            // },
            // '&.Mui-focused fieldset': {
            //     borderColor: 'white',
            // },
            color: 'white',
            backgroundColor: '#576c7b',
        },
    };

    return (
        <Box sx={{ bgcolor: '#051b30', color: 'white', py: 8 }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h3" gutterBottom align="center">
                    Let's Discuss Your Project
                </Typography>
                <Typography variant="subtitle1" align="center" sx={{ mb: 4 }}>
                    Always available for freelancing if the right project comes along, Feel free to contact me.
                </Typography>
                <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ bgcolor: '#05335c', p: 4, borderRadius: '16px' }}>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* Social Icons */}
                            <Box sx={{ display: 'flex', '& > *': { m: 1 } }}>
                                <IconButton aria-label="facebook" sx={{ color: 'white' }}>
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton aria-label="instagram" sx={{ color: 'white' }}>
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton aria-label="linkedin" sx={{ color: 'white' }}>
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                            {/* Contact Info */}
                            <Typography variant="h6" gutterBottom align="center" sx={{ mt: 4 }}>
                                <EmailIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
                                hrshrayank77@gmail.com
                            </Typography>
                            <Typography variant="h6" gutterBottom align="center">
                                <PhoneIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />
                                +91 9008156702
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Your Name" variant="outlined" fullWidth required sx={textFieldStyles} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label="Your Email" variant="outlined" fullWidth required type="email" sx={textFieldStyles} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Subject" variant="outlined" fullWidth required sx={textFieldStyles} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Your Message" variant="outlined" fullWidth required multiline rows={4} sx={textFieldStyles} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: 'white', color: '#051b30', '&:hover': { backgroundColor: 'white', opacity: '0.8' } }}>
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactMe;
