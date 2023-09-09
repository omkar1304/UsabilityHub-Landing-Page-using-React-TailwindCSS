import React from "react";
import Facebook from "../assets/asset 28.png";
import Twitter from "../assets/asset 29.png";
import Linkedin from "../assets/asset 30.png";
import Youtube from "../assets/asset 31.png";

const Links = () => {
  return (
    <section className="bg-[#b9cde4] px-[110px] max-md:px-3 py-[10px] flex flex-row max-ssm:flex-col justify-around max-ssm:items-center">
      <div className="flex flex-row max-xs:flex-col gap-6 max-xs:gap-3 items-center max-xs:mb-3">
        <h4 className="text-primary text-[16px] font-semibold cursor-pointer">
          Privacy policy
        </h4>
        <h4 className="text-primary text-[16px] font-semibold cursor-pointer">
          Terms & conditions
        </h4>
        <h4 className="text-primary text-[16px] font-semibold cursor-pointer">
          Security information
        </h4>
      </div>
      <div className="flex flex-row justify-between gap-x-7 p-1">
        <img
          src={Facebook}
          alt="Facebook"
          width={16}
          height={16}
          className="cursor-pointer"
        />
        <img
          src={Twitter}
          alt="Twitter"
          width={16}
          height={16}
          className="cursor-pointer"
        />
        <img
          src={Linkedin}
          alt="Linkedin"
          width={16}
          height={16}
          className="cursor-pointer"
        />
        <img
          src={Youtube}
          alt="Youtube"
          width={16}
          height={16}
          className="cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Links;
