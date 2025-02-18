import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
function Footer() {
  return (
    <>
      <div
        id="Footer"
        className="flex flex-col md:flex-row justify-between items-center p-10 md:p-12 bg-[#1E3A8A]"
      >
        <div className="flex items-center gap-8 md:gap-12">
          <a
            href="https://wa.me/916204476413"
            target="_black"
            rel="noreferrer noopener"
            className="text-green-400 text-5xl md:text-6xl"
          >
            <FaWhatsapp />
          </a>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold">Get in Touch</h2>
            <p>
              Interested in collaborating or just want to say chat? Feel free to
              reach out!
            </p>
          </div>
        </div>

        <ul className="text-sm md:text-xl text-indigo-200 mt-6 md:mt-0 font-mono">
          <li className="flex gap-1 items-center">
            <MdOutlineEmail size={20} />
            <a
              href="mailto:shibamurmu001@gmail.com"
              className="hover:underline"
            >
              shibamurmu001@gmail.com
            </a>
            {/* shibamurmu001@gmail.com
             */}
          </li>
          <li className="flex gap-1 items-center">
            <CiLinkedin />
            <a
              href="https://www.linked.com/10/shibamurmu"
              target="_blank"
              rel="noopener noreffer"
              className="hover:underline"
            >
              linkedin.com/shiva
            </a>
          </li>

          <li className="flex gap-1 items-center">
            <a
              href="https://github.com/10shiba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <FaGithub />
              github.com/shiva
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <a href="tel:+916204476413" className="flex items-center gap-1">
              <FiPhone />
              +91 6204476413
            </a>
            <span className="mx-1">/</span>
            <a href="tel:+91 8928363822" className="flex items-center gap-1">
              8928363822
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
