import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white px-6 py-6">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 max-w-6xl mx-auto">
        
        {/* Left: Logo + text */}
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center gap-2">
            <img
              src="./favicon.svg"
              alt="DevCircle Logo"
              className="w-8 h-8"
            />
            <span className="font-bold text-lg">DevCircle</span>
          </div>
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        {/* Middle: Caption */}
        <p className="text-sm text-center md:text-left font-medium max-w-md">
        Made with <span className="text-red-400">❤️</span> for developers — build, connect, launch 🚀        </p>

        {/* Right: Social links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/nagaraju-nali-98a037172/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/githubnali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
