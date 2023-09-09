import React, { useState } from "react";
import NavImage from "../assets/asset 1.png";
import NavImage2 from "../assets/asset 33.svg";
import Button from "../components/Button";
import Hamburger from "../assets/hamburger.svg";
import Cross from "../assets/cross.svg";

const Nav = () => {
  const [toggle, SetToggle] = useState(false);

  const handlToggle = () => {
    SetToggle((prev) => !prev);
  };

  return (
    <nav className="max-container max-md:mx-[30px] h-[50px] flex flex-row justify-between items-center pt-4">
      <div className="flex flex-row gap-x-2">
        <img src={NavImage} alt="nav-image" className="w-[168px] h-[31px]" />
        <div className="bg-nav-img2 w-[130px] h-[28px] flex justify-center items-center max-xs:hidden">
          <p className="text-sm text-primary text">Become a tester</p>
        </div>
      </div>

      <ul className="flex flex-row gap-x-5 justify-center items-center text-primary text-[15px] max-md:hidden">
        <li>Product</li>
        <li>Customers</li>
        <li>Pricing</li>
        <li>Resources</li>
        <Button
          text="Sign in"
          bgColor="bg-btn-bg-secondary"
          textColor="text-btn-text-secondary"
          borderWidth="true"
        />
        <Button
          text="Try for free"
          bgColor="bg-btn-bg-primary"
          textColor="text-btn-text-primary"
          borderWidth="false"
        />
      </ul>

      {toggle ? (
        <div
          className="flex flex-col mt-52 items-end justify-center gap-y-1 md:hidden z-10 bg-white-400 p-2"
          onClick={handlToggle}
        >
          <div>
            <img src={Cross} alt="cross" width={45} height={45} />
          </div>
          <ul className="flex flex-col items-end justify-center gap-y-2 text-primary text-[15px]">
            <li>Product</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Resources</li>
            <Button
              text="Sign in"
              bgColor="bg-btn-bg-secondary"
              textColor="text-btn-text-secondary"
              borderWidth="true"
            />
            <Button
              text="Try for free"
              bgColor="bg-btn-bg-primary"
              textColor="text-btn-text-primary"
              borderWidth="false"
            />
          </ul>
        </div>
      ) : (
        <div className="hidden max-md:flex" onClick={handlToggle}>
          <img src={Hamburger} alt="hamburger" width={30} height={30} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
