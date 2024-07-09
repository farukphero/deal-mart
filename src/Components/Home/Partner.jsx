"use client"
import React from "react";
import Image from "next/image";
import image1 from "../../assets/partner/fcc5ed125ca538aef9b353294f9102e7.png";
import image2 from "../../assets/partner/7d5f04620475ead600d3dbc67d87d0ea.png";
import image3 from "../../assets/partner/04508ed33dd2ced6f20c163ed8829aa2.png";
import image4 from "../../assets/partner/8e509560fd665171f655a9678d3ed264.png";
import image5 from "../../assets/partner/908f6e8fcc25581a83569287e133ee27.png";
import image6 from "../../assets/partner/e5dff8f28e2ac13808aca9bdbc8c09a2.png";
import { Button } from "@material-tailwind/react";

const Partner = () => {
  return (
    <div className="bg-[#EBF5EC] mt-20">
      <div className="md:w-[88%] mx-auto flex justify-between">
        <div>
          <div className="mx-4 md:mx-0">
            <Image
              src={image1}
              alt="image"
              className="md:w-[250px] h-[180px] rounded-b-[16px]"
            />
          </div>
          <div className="my-5 mx-4 md:mx-0">
            <Image
              src={image2}
              alt="image"
              className="md:w-[250px] h-[250px] rounded-[16px]"
            />
          </div>
          <div className="mx-4 md:mx-0">
            <Image
              src={image3}
              alt="image"
              className="md:w-[250px] h-[180px] rounded-t-[16px]"
            />
          </div>
        </div>

        <div className="h-[640px] flex justify-center items-center">
          <div>
            <h2 className="text-[#00AF91] text-sm font-bold flex justify-center items-center">
              PARTNER WITH US
            </h2>
            <h3 className="text-[#263238] mt-5 text-4xl leading-tight md:text-[48px] md:w-[574px] text-center ">
              Join the Leading Platform for Desi Groceries
            </h3>
            <p className="text-[#263238] text-[18px] md:w-[500px] text-center hidden md:flex">
              Reach a wider audience and watch your sales soar to thousands of
              eager customers. Our dedicated audience is always on the lookout
              for the best deals on desi groceries, and we want to feature your
              store!
            </p>

           <div className="flex justify-center mt-10">
           <Button className="bg-[#00AF91] flex justify-center items-center gap-x-2">
              {" "}
              <span className="text-[16px] font-medium lowercase">
                <span className=" uppercase">R</span>egister{" "}
                <span className=" uppercase">Y</span>our{" "}
                <span className=" uppercase">S</span>tore
              </span>
            </Button>
           </div>
          </div>
        </div>
        <div>
          <div className="mx-4 md:mx-0">
            <Image
              src={image4}
              alt="image"
              className="md:w-[250px] h-[180px] rounded-b-[16px]"
            />
          </div>
          <div className="my-5 mx-4 md:mx-0">
            <Image
              src={image5}
              alt="image"
              className="md:w-[250px] h-[250px] rounded-[16px]"
            />
          </div>
          <div className="mx-4 md:mx-0">
            <Image
              src={image6}
              alt="image"
              className="md:w-[250px] h-[180px] rounded-t-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
