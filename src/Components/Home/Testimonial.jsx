"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import image1 from "../../assets/testimonial/4c249b0cc129da65f102e573aee8d183.png";
import image2 from "../../assets/testimonial/8a8f08bf1b8d00cee817ae3fbc9a52ba.png";
import image3 from "../../assets/testimonial/1eadbcc32e02d656cdddf50f85738570.png";

const testimonialData = [
  {
    description:
      "As a busy mom, iDealMart makes it so easy to get everything I need at the best prices. The quality of products from trusted stores is always top-notch. It's a game-changer!",

    image: image1,
    name: "Priya Malhotra",
    address: "Toronto, ON",
  },
  {
    description:
      "iDealMart has completely changed how I shop for groceries. The app is user-friendly, and I always find fantastic deals on my favorite desi products. I highly recommend it!",

    image: image2,
    name: "Sanjay Prakash",
    address: "Vancouver, BC",
  },
  {
    description:
      "Partnering with iDealMart has significantly boosted my store's sales. The exposure to a wider audience and the support from the iDealMart team have been invaluable.",

    image: image3,
    name: "Rajesh Singh",
    address: "Calgary, AB",
  },
  {
    description:
      "As a busy mom, iDealMart makes it so easy to get everything I need at the best prices. The quality of products from trusted stores is always top-notch. It's a game-changer!",

    image: image1,
    name: "Priya Malhotra",
    address: "Toronto, ON",
  },
  {
    description:
      "iDealMart has completely changed how I shop for groceries. The app is user-friendly, and I always find fantastic deals on my favorite desi products. I highly recommend it!",

    image: image2,
    name: "Sanjay Prakash",
    address: "Vancouver, BC",
  },
  {
    description:
      "Partnering with iDealMart has significantly boosted my store's sales. The exposure to a wider audience and the support from the iDealMart team have been invaluable.",

    image: image3,
    name: "Rajesh Singh",
    address: "Calgary, AB",
  },
  {
    description:
      "As a busy mom, iDealMart makes it so easy to get everything I need at the best prices. The quality of products from trusted stores is always top-notch. It's a game-changer!",

    image: image1,
    name: "Priya Malhotra",
    address: "Toronto, ON",
  },
  {
    description:
      "iDealMart has completely changed how I shop for groceries. The app is user-friendly, and I always find fantastic deals on my favorite desi products. I highly recommend it!",

    image: image2,
    name: "Sanjay Prakash",
    address: "Vancouver, BC",
  },
  {
    description:
      "Partnering with iDealMart has significantly boosted my store's sales. The exposure to a wider audience and the support from the iDealMart team have been invaluable.",

    image: image3,
    name: "Rajesh Singh",
    address: "Calgary, AB",
  },
];

export function Testimonial() {
  return (
    <section className="md:w-[88%] lg:mx-auto mx-8 mt-20">
      <div>
        <h2 className=" text-center lg:text-start text-[#00AF91] font-bold text-sm">Testimonials</h2>
        <p className="text-start text-[#263238] text-[39px] leading-tight md:text-[56px] font-medium">Praise from our <br className="hidden lg:flex"/> Valued Customers</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper mt-10"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {testimonialData &&
          testimonialData?.map((tes, index) => (
            <SwiperSlide key={index}>
              <div className="newsWraps">
                <div className="newsCard flex flex-col justify-between">
                  <div>
                    <div>
                      <Card
                        color="transparent"
                        shadow={false}
                        className="w-full md:max-w-[20rem] border-2 border-[#E0E6E2] rounded-xl p-5"
                      >
                        <CardHeader
                          color="transparent"
                          floated={false}
                          shadow={false}
                          className="mx-0 flex items-center pb-4"
                        >
                          <svg
                            width="61"
                            height="61"
                            viewBox="0 0 61 61"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.8739 21.2756L17.87 21.2817L17.8661 21.2878C17.0981 22.5177 16.6625 23.926 16.6019 25.3748L16.5584 26.4165H17.6011H25.4167C25.8256 26.4165 26.2177 26.5789 26.5068 26.868C26.7959 27.1572 26.9584 27.5493 26.9584 27.9582V45.7498C26.9584 48.001 25.1262 49.8332 22.875 49.8332H7.62503C7.21615 49.8332 6.82402 49.6707 6.53491 49.3816C6.24579 49.0925 6.08336 48.7004 6.08336 48.2915V35.5837V35.5832L6.09099 28.1651L6.09103 28.1241L6.08772 28.0832C6.0695 27.8585 5.62037 21.55 10.1164 16.67C13.4341 13.0732 18.5218 11.1665 25.4167 11.1665H26.9584V16.5119L25.7187 16.7601C22.1001 17.4838 19.3752 18.9471 17.8739 21.2756ZM34.0493 28.1651L34.0494 28.1241L34.046 28.0832C34.0278 27.8585 33.5787 21.5496 38.0751 16.6696C41.3929 13.0731 46.4804 11.1665 53.375 11.1665H54.9167V16.5119L53.6771 16.7601C50.0584 17.4838 47.3335 18.9471 45.8322 21.2756L45.8283 21.2817L45.8245 21.2878C45.0564 22.5177 44.6208 23.926 44.5603 25.3748L44.5168 26.4165H45.5594H53.375C53.7839 26.4165 54.176 26.5789 54.4652 26.868C54.7543 27.1572 54.9167 27.5493 54.9167 27.9582V45.7498C54.9167 48.001 53.0845 49.8332 50.8334 49.8332H35.5834C35.1745 49.8332 34.7824 49.6707 34.4932 49.3816C34.2041 49.0925 34.0417 48.7004 34.0417 48.2915V35.5842V35.5832L34.0493 28.1651Z"
                              fill="#DDF5E1"
                              stroke="#00AF91"
                              stroke-width="2"
                            />
                          </svg>
                        </CardHeader>
                        <CardBody className="p-0">
                          <Typography>{tes?.description}</Typography>
                        </CardBody>
                        <CardFooter className="p-0 mt-4 flex gap-x-3">
                          <Image
                            className="w-14 h-14 rounded-full"
                            src={tes?.image}
                            alt={tes?.name}
                            width={100}
                            height={100}
                          />
                          <div className="flex items-center w-full   gap-0.5">
                            <div>
                              <div className="flex items-center justify-between">
                                <Typography variant="h6" color="blue-gray">
                                  {tes?.name}
                                </Typography>
                              </div>
                              <Typography color="blue-gray" className="text-sm">
                                {tes?.address}
                              </Typography>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
