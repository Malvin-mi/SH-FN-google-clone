import React from 'react';
import './footer.css'
import leafIcon from './leaf.png'

const Footer = () => {
    return ( 
        <div className="footer">
            <div id="bl-1">
                Nigeria
            </div>
            <div id="bl-2">
                <div className="bl-2-" id="bl-2-1">
                    <a className="footer-link" href="/">About</a>
                    <a className="footer-link" href="/">Advertising</a>
                    <a className="footer-link" href="/">Business</a>
                    <a className="footer-link" href="/">Search how it works</a>
                </div>
                <div className="bl-2-" id="bl-2-2">
                <a className="footer-link" href="/"><img style={{height:"16px", marginRight:"6px"}} alt="leaf" src={leafIcon} /><span>Carbon neutral since 2007</span></a>
                </div>
                <div className="bl-2-" id="bl-2-3">
                    <a className="footer-link" href="/">Privacy</a>
                    <a className="footer-link" href="/">Terms</a>
                    <a className="footer-link" href="/">Settings</a>
                </div>
            </div>
        </div>
     );
}

export default Footer; 