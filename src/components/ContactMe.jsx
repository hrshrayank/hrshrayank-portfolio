import React, { useState } from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { Snackbar, Alert } from '@mui/material';

const ContactMe = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/xjvnyvrg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            if (response.ok) {
                setSnackbarMessage('Form successfully submitted');
                setSnackbarSeverity('success');
                // Clear the form
                setForm({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setSnackbarMessage('An error occurred');
                setSnackbarSeverity('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSnackbarMessage('An error occurred');
            setSnackbarSeverity('error');
        }
        setOpenSnackbar(true);
    };

    const openPopupWidget = () => {
        const link = 'https://calendly.com/hrshrayank77/career-opportunities-with-shrayank';
        window.open(link, 'Calendly', 'width=800,height=600');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="bg-gray-900 text-white py-16 px-10">
            <div className="text-left mb-12">
                <h3 className="inline-block bg-blue-800 px-4 py-1 text-sm font-semibold tracking-wide uppercase">
                    Contact
                </h3>
                <h2 className="text-4xl mt-4">
                    <span className="text-white">Contact</span>{" "}
                    <span className="text-blue-500">Me</span>
                </h2>
            </div>
            <div className="max-w-6xl  bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <button
                            onClick={openPopupWidget}
                            className="bg-blue-600 text-white py-2 px-4 rounded-full mb-6 flex items-center space-x-2 hover:bg-blue-700 transition"
                        >
                            <FaCalendarAlt />
                            <span>Schedule a Meeting</span>
                        </button>
                        <div className="flex space-x-4 mb-4">
                            <a href="https://twitter.com/hrshrayank77" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://github.com/hrshrayank" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                                <FaGithub size={28} />
                            </a>
                            <a href="https://in.linkedin.com/in/hrshrayank" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start mb-2">
                            <FaEnvelope className="mr-2" />
                            <p>hrshrayank77@gmail.com</p>
                        </div>
                        <div className="flex items-center justify-center md:justify-start">
                            <FaPhoneAlt className="mr-2" />
                            <p>+91 9008156702</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-full mt-6 hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ContactMe;
