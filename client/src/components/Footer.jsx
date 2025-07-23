import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="social-icons">
        <span>Shubham Singh</span>
        <a
          href="https://github.com/Shubhamcse08"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-singh-a4409a303/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Sentiment Analyzer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
