import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Community", href: "/#community" },
  { label: "Resources", href: "/#resources" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "#about" },
];

const communityLinks = [
  { label: "Discord", href: "https://discord.com" },
  { label: "GitHub", href: "https://github.com/githubnali" },
  { label: "Discussions", href: "/#community" },
  { label: "Events", href: "/#community" },
];

const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/nagaraju-nali-98a037172/" },
  { icon: FaGithub, href: "https://github.com/githubnali" },
  { icon: FaTwitter, href: "https://twitter.com" },
  { icon: FaYoutube, href: "https://youtube.com" },
];

const Footer = () => {
  return (
    <footer id="about" className="w-full bg-neutral text-white px-6 pt-14 pb-6">
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4 mb-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/brand_logo.svg" alt="DevBuddy" className="w-9 h-9" />
            <span className="font-bold text-lg">DevBuddy</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            A community for developers to learn, connect, build and grow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {quickLinks.map((link) => (
              <li key={link.label}>
                {link.href === "/" ? (
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {communityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl text-white/70">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
        <p>© {new Date().getFullYear()} DevBuddy. All rights reserved.</p>
        <p>
          Made with <span className="text-red-400">❤️</span> for developers — learn, connect, build.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
