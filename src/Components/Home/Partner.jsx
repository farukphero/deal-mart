"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Button } from "@material-tailwind/react";
import image1 from "../../assets/partner/fcc5ed125ca538aef9b353294f9102e7.png";
import image2 from "../../assets/partner/7d5f04620475ead600d3dbc67d87d0ea.png";
import image3 from "../../assets/partner/04508ed33dd2ced6f20c163ed8829aa2.png";
import image4 from "../../assets/partner/8e509560fd665171f655a9678d3ed264.png";
import image5 from "../../assets/partner/908f6e8fcc25581a83569287e133ee27.png";
import image6 from "../../assets/partner/e5dff8f28e2ac13808aca9bdbc8c09a2.png";

const partnerImage = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
  {
    id: 3,
    image: image3,
  },
  {
    id: 4,
    image: image4,
  },
  {
    id: 5,
    image: image5,
  },
  {
    id: 6,
    image: image6,
  },
];

const Partner = () => {
  return (
    <div className="bg-[#EBF5EC] mt-20">
      <div className="md:w-[88%] mx-auto flex justify-between">
        <div className="hidden lg:block">
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

        <div className="py-14 lg:py-0 lg:h-[640px] flex justify-center items-center">
          <div>
            <h2 className="text-[#00AF91] text-sm font-bold flex justify-center items-center">
              PARTNER WITH US
            </h2>
            <h3 className="text-[#263238] mt-5 text-[40px] leading-tight md:text-[48px] md:w-[574px] text-center ">
              Join the Leading Platform for Desi Groceries
            </h3>
            <p className="text-[#263238] text-[16px] lg:text-[18px] md:w-[500px] text-center mx-9 lg:mx-0 mt-4 lg:mt-0">
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
        <div className="hidden lg:block">
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
      <div className="flex lg:hidden pb-14">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={2500}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
             
          }}
        >
          {partnerImage &&
            partnerImage?.map((tes, index) => (
              <SwiperSlide key={index}>
                <Image
                  className="w-[250px] h-[155px] rounded-[16px]"
                  src={tes?.image}
                  alt=""
                  width={100}
                  height={100}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
