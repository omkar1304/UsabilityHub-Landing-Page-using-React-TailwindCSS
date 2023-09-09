import React from "react";

const CTA = () => {
  return (
    <section className="mx-[110px] max-md:mx-3 mt-4 flex flex-col items-center">
      <h1 className="pt-[15px] mt-[15px] mb-[35px] text-[40px] max-ssm:text-[35px] max-xs:text-[25px] text-primary font-semibold">Start a 14 day free trial</h1>

      <h4 className="w-[50%] max-xs:w-[100%] px-2 text-[#577592] text-[20px] max-ssm:text-[17px] max-xs:text-[12px] mb-[35px] text-center">
        Learn why UsabilityHub is trusted by 280,000+ designers, marketers,
        product managers, and researchers.
      </h4>

      <div className="flex flex-col">
        <button className="px-8 bg-[#2294ed] text-white font-semibold rounded-[4px] h-[45px]">
          Try for free
        </button>
        <p className="my-3 text-[12px] text-[#577592] mt-1 mx-auto">
          No credit card required
        </p>
      </div>
    </section>
  );
};

export default CTA;
