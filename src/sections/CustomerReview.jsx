import React from "react";
import CustomerReviewImg from "../assets/asset 18.png";
import CompanyImg from "../assets/asset 19.png";
import ProfileImg from "../assets/asset 20.png";


const CustomerReview = () => {
  return (
    <section className="mx-[110px] max-md:mx-3 flex flex-row max-sm:flex-col">
      <div className="flex flex-1 mx-[40px] object-contain">
        <img src={CustomerReviewImg} alt="customer-review" />
      </div>

      <div className="flex flex-1 flex-col gap-y-4">
        <div className="ml-[25px]">
          <h5 className="text-primary text-[15px] font-semibold mb-[10px]">
            Effortless validation for
          </h5>
          <h2 className="text-primary text-3xl font-semibold mb-3">
            Design professionals
          </h2>
          <p className="text-[#577592] text-[20px] max-sm:text-[15px] font-normal leading-[26px] ">
            Test interfaces, interaction flows, iconography and more, to help
            you create intuitive and delightful experiences for your users.
          </p>
        </div>

        <div>
          <img
            src={CompanyImg}
            alt="company-img"
            width={105}
            height={30}
            className="mb-3 ml-[25px]"
          />
          <p className="pt-3 pl-[25px] text-primary text-[15px] font-semibold w-[75%] max-sm:w-[60%] max-xs:w-[90%] bg-para-img bg-no-repeat">
            The navigation test is god's gift to UI designers, it probably has
            the best power-to-simplicity ratio of any software, ever.
          </p>
          <div className="flex flex-row ml-[25px] mt-[25px]">
            <div>
              <img src={ProfileImg} alt="profile-img" width={48} height={48} />
            </div>
            <div className="mb-1 pl-[10px]">
              <h5 className=" text-primary text-[15px] max-sm:text-[18px] font-semibold">Nick Franklin</h5>
              <h6 className="text-[#577592] text-[13px] max-sm:text-[15px]">Chief Executive Officer</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
