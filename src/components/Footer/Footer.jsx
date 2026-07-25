import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center text-base-content bg-[#0B2F5B] px-4 py-6 text-center">
            <aside>
                <p className="text-xs sm:text-sm">Copyright © {new Date().getFullYear()} - All right reserved by Simplico.Inc</p>
            </aside>
        </footer>
    );
};

export default Footer;