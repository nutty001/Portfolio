import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/projects/logo2.webp";
const Navbar = () => {
  return (
    <nav className="flex item-center justify-between py-6">
      <div className="flex flex-shrink-0 item-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="m-8" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a
          href="www.linkedin.com/in/pratikt"
          target="_blank"
          rel="noopener noreffer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nutty001"
          target="_blank"
          rel="noopener noreffer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
