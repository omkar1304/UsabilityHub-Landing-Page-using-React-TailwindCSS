import React from "react";
import ServiceButton from "./ServiceButton";

const ServiceCard = ({ image, title, desc }) => {
  return (
    <div className="flex flex-col items-center px-2 gap-y-[10px] w-[300px] h-[212px] max-xs:h-[250px] justify-center align-child mb-4 flex-shrink">
      <img src={image} alt="image" width={40} height={40}/>
      <h2 className="text-[#183b56] font-semibold text-[22px] max-md:text-[18px] max-ssm:text-[18px] leading-[30px]">{title}</h2>
        <p className="text-[#577592] leading-[30px] text-[17px] max-md:text-[14px] max-ssm:text-[16px] text-center">
          {desc}
        </p>
      <ServiceButton text="Learn more" />
    </div>
  );
};

export default ServiceCard;
