import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Foot = () => {
  const handleDownload = (file, name) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="footer" className={`${styles.flexCenter} ${styles.paddingY} flex-col text-dim-white`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} alt="gsite" className="w-[266px] h-[72px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Empowering ideas through technology.</p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink, index) => (
            <div key={`footerLink_${index}`} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h1 className="font-poppins font-medium text-[22px] leading-[27px] text-white mb-4 ml-2">{footerLink.title}</h1>
              <ul className="list-none flex flex-col gap-4">
                {footerLink.links.map((link) => (
                  <li
                    key={link.id}
                    className="flex items-center gap-2 text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-300 ml-2"
                  >
                    {link.icon && (
                      <span className="text-[20px]">
                        {typeof link.icon === "function" ? <link.icon /> : <img src={link.icon} alt={link.name} className="w-[20px] h-[20px] text-dim-white" />}
                      </span>
                    )}

                    {/* Conditionally handle download or external link */}
                    {link.file ? (
                      <button
                        onClick={() => handleDownload(link.file, link.name + ".pdf")}
                        className="font-poppins text-[16px] leading-[24px] visited:text-purple-600 hover:text-secondary cursor-pointer"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.link}
                        target={link.link.startsWith("http") ? "_blank" : "_self"}
                        rel={link.link.startsWith("http") ? "noopener noreferrer" : ""}
                        className="font-poppins text-[16px] leading-[24px] visited:text-purple-600 hover:text-secondary cursor-pointer"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          © 2025 G-Site. All Right Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => handleDownload(social.link, social.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foot;
