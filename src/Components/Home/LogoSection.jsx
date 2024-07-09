import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import brand1 from "../../assets/logos/42a7846b8b78e97295b614d8905f3c27.png";
import brand2 from "../../assets/logos/755120b3716d9f6b9f85379becfdab65.png";
import brand3 from "../../assets/logos/98dbb8be9a3dc4fe6dae3677bd38b27b.png";
import brand4 from "../../assets/logos/b5ff0ea3bf5738f06523a860ab2163c9.png";
import brand5 from "../../assets/logos/ed85a174c17fcae63679816cfc31fa8c.png";
import brand6 from "../../assets/logos/f111b444ca468dd7874908fa14872ae0.png";

import "../Css/LogoSection.css";

const LogoSection = () => {
  const logos = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
  ];

  return (
    <div className="mt-20">
      <h1 className="text-center text-lg font-normal">
        100+ Desi brands available in stores
      </h1>

      <div>
        <Marquee gradient={false} speed={30}>
          {logos?.map((logo, index) => (
            <div key={index} className="slider slickSliderImgWrap">
              <Image src={logo} alt="brand" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LogoSection;
