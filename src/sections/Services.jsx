import React from "react";
import ServiceButton from "../components/ServiceButton";
import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import Sort from "../assets/asset 11.svg";

const Services = () => {
  return (
    <section className="mx-[110px] max-md:mx-3 py-[40px] flex flex-col bg-service-img object-none bg-no-repeat bg-center max-ssm:bg-none">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-primary text-[30px] max-ssm:text-[25px] max-xs:text-[20px]font-semibold max-xs:font-medium py-4 text-center">
          Your user research Swiss Army knife
        </h2>
        <ServiceButton text="See all features" />
      </div>

      <div className="px-[40px] py-[20px] mt-3 flex flex-row flex-wrap justify-center items-center gap-x-0">
        {services.map((service, index) => (
          <ServiceCard
          key={index}
            image={service.image}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
