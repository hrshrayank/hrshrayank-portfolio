import React from 'react';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-4 text-center border-t border-white">
            <p className="text-sm">
                © {new Date().getFullYear()} Shrayank. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
