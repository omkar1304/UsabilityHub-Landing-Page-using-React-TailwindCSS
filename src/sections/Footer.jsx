import React from "react";
import Logo from "../assets/asset 27.svg";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section className="bg-[#ebf2fa] px-[110px] max-md:px-3 mt-5 pb-7 pt-[80px] flex flex-row max-ssm:flex-col justify-between items-start max-ssm:items-center max-ssm:gap-y-9">
      <img src={Logo} alt="logo" className="pr-12 pl-3" />
      <div className="flex flex-row max-ssm:flex-col flex-1 justify-between max-ssm:text-center max-ssm:gap-y-4">
        {footerLinks.map((footerLink, index) => (
          <div key={index} className="flex flex-col mx-6 mb-2">
            <h4 className="text-primary text-[20px] font-semibold mb-[13px]">
              {footerLink.title}
            </h4>
            <ul>
              {footerLink.links.map((link, index) => (
                <li
                  key={index}
                  className="text-[#577592] text-[16px] leading-[30px] cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
