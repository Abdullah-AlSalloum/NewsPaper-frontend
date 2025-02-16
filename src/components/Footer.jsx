import React from "react";
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <p className="copyright">
                Copyrights <CopyrightIcon /> made by Abdullah AL SALLOUM
            </p>
        </div>
    );
}

export default Footer;
