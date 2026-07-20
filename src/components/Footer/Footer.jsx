import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center text-base-content bg-[#001931] p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Simplico.Inc</p>
            </aside>
        </footer>
    );
};

export default Footer;