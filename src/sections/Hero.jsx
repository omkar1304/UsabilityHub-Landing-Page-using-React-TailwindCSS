import React from "react";
import Button from "../components/Button";
import HeroImage from "../assets/asset 2.jpeg";

const Hero = () => {
  return (
    <section className="mx-[110px] max-md:mx-3 my-10 flex flex-row max-md:flex-col-reverse justify-around gap-x-[106px]">
      <div className="flex-1 flex flex-col max-md:justify-center max-md:items-center">
        <h3 className="mt-[67px] text-[45px] max-md:text-[38px] leading-[58px] font-semibold text-primary">
          Design confidently.
        </h3>
        <p className="mt-[16px] mb-[28px] text-[20px] max-md:text-[18px] leading-[25px] text-[#577592]">
          UsabilityHub is a remote user research platform that takes the
          guesswork out of design decisions by validating them with real users.
        </p>
        <div className="flex flex-col w-[50%]">
          <button className="bg-[#2294ed] text-white font-semibold rounded-[4px]  h-[45px]">
            Try for free
          </button>
          <p className="text-[12px] text-[#577592] mt-1 mx-auto">
            No credit card required
          </p>
        </div>
      </div>

      <div className="flex-1 flex justify-end max-md:justify-center items-start max-md:items-center">
        <img
          src={HeroImage}
          alt="hero-image"
          width={586}
          height={429}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
