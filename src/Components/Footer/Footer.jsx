//import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../Icons';
//import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-logo">Aman</h2>
            <p className="footer-text">Frontend Developer</p>
          </div>
          
          <div className="social-links">
            <a href="#" className="social-link">
              <GithubIcon className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <LinkedinIcon className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <TwitterIcon className="social-icon" />
            </a>
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} AMAN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}