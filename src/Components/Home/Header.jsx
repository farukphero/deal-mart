"use client";
import React from "react";
import {
  Collapse,
  Typography,
  IconButton,
  Button,
  Navbar,
} from "@material-tailwind/react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineFileDownload } from "react-icons/md";
 

function NavList() {
  return (
    <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 z-50">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className=" text-[16px] font-medium flex items-center hover:text-blue-500 transition-colors"
        >
          Register Business
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a
          href="#"
          className="text-[16px] font-medium flex items-center hover:text-blue-500 transition-colors"
        >
          Contact
        </a>
      </Typography>

      <Button className="bg-[#00AF91] flex justify-center items-center gap-x-2">
        {" "}
        <MdOutlineFileDownload className="h-[18px] w-[18px]" />
        <span className="text-[16px] font-medium lowercase">
          <span className=" uppercase">D</span>ownload
        </span>
      </Button>
      
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 bg-white mx-auto px-6 lg:px-20 py-3 shadow-md w-full">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography className="cursor-pointer ">
          <svg
            width="224"
            height="59"
            viewBox="0 0 224 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.0814 7.00659H46.1937C45.7609 7.00659 45.4104 7.35713 45.4104 7.78993C45.4104 8.22272 45.7629 8.57326 46.1937 8.57326H48.9609V17.1782V50.227L48.4869 50.5795C48.1403 50.838 48.0679 51.3296 48.3264 51.6781C48.4811 51.8838 48.7161 51.9934 48.955 51.9934C49.1175 51.9934 49.282 51.9425 49.423 51.8387L56.5494 46.5355C56.7472 46.3867 56.8647 46.1537 56.8647 45.9069V7.78993C56.8647 7.35713 56.5141 7.00659 56.0814 7.00659Z"
              fill="#00BDBD"
            />
            <path
              d="M48.9551 7.00659H10.9183C10.4856 7.00659 10.135 7.35713 10.135 7.78993V51.2081C10.135 51.6409 10.4856 51.9915 10.9183 51.9915H48.957C49.3898 51.9915 49.7403 51.639 49.7403 51.2081V7.00659C48.7063 7.00659 49.3878 7.00659 48.9551 7.00659Z"
              fill="#00E58B"
            />
            <path
              d="M20.5787 21.9729C18.9318 21.9729 17.5923 20.6334 17.5923 18.9865C17.5923 17.3395 18.9318 16 20.5787 16C22.2257 16 23.5652 17.3395 23.5652 18.9865C23.5652 20.6334 22.2257 21.9729 20.5787 21.9729Z"
              fill="#00BDBD"
            />
            <path
              d="M39.226 21.9729C37.579 21.9729 36.2395 20.6334 36.2395 18.9865C36.2395 17.3395 37.579 16 39.226 16C40.8729 16 42.2124 17.3395 42.2124 18.9865C42.2124 20.6334 40.8729 21.9729 39.226 21.9729Z"
              fill="#00BDBD"
            />
            <path
              d="M29.8357 35.5737C28.2024 35.5737 26.5868 35.1252 25.1474 34.2694C23.2517 33.1414 20.7607 30.7992 19.6562 26.0405C19.5524 25.5901 19.8305 25.1416 20.2809 25.0378C20.7196 24.9379 21.1779 25.2141 21.2836 25.6625C22.253 29.8494 24.3837 31.8724 25.9993 32.8339C27.2526 33.5801 28.6939 33.96 30.0785 33.8993C31.4865 33.8523 32.8711 33.3979 34.0833 32.5872C36.2394 31.1498 37.7454 28.696 38.325 25.6782C38.4112 25.2258 38.844 24.9301 39.3022 25.0143C39.7546 25.1024 40.0523 25.5392 39.9642 25.9915C39.3022 29.4519 37.5397 32.2895 35.0096 33.9757C33.5408 34.9587 31.8547 35.509 30.1353 35.5678C30.0354 35.5697 29.9355 35.5737 29.8357 35.5737Z"
              fill="#5C546A"
            />
            <path
              d="M10.135 43.4571H49.7403V45.0257H10.135V43.4571Z"
              fill="#1D9964"
            />
            <path
              d="M218.445 38.77V41.885C217.36 42.375 216.415 42.55 215.295 42.55C211.865 42.55 209.485 40.695 209.485 36.6V27H205.39V23.4H209.485V18.155H213.02V23.4H217.62V27H213.02V35.795C213.02 38.35 214.245 39.26 216.135 39.26C216.975 39.26 217.71 39.12 218.445 38.77Z"
              fill="#263238"
            />
            <path
              d="M196.925 32.715V42.2H193.39V23.65H196.68V27.57C197.975 25.015 200.775 23.405 203.82 23.405V27.08C199.83 26.87 196.925 28.62 196.925 32.715Z"
              fill="#263238"
            />
            <path
              d="M186.71 42.2V39.33C185.555 41.395 183.49 42.55 180.76 42.55C176.91 42.55 174.39 40.345 174.39 36.95C174.39 33.31 177.295 31.42 182.825 31.42C183.91 31.42 184.785 31.455 186.29 31.63V30.265C186.29 27.605 184.855 26.1 182.405 26.1C179.815 26.1 178.24 27.64 178.135 30.23H174.915C175.09 26.065 178.065 23.3 182.405 23.3C186.99 23.3 189.65 25.89 189.65 30.3V42.2H186.71ZM177.75 36.845C177.75 38.77 179.185 40.03 181.46 40.03C184.435 40.03 186.29 38.175 186.29 35.34V33.835C184.925 33.66 183.945 33.625 183.035 33.625C179.5 33.625 177.75 34.675 177.75 36.845Z"
              fill="#263238"
            />
            <path
              d="M156.48 42.2L148.535 22.985V42.2H145V17.07H149.725L158.16 37.475L166.56 17.07H171.32V42.2H167.75V22.95L159.77 42.2H156.48Z"
              fill="#263238"
            />
            <path d="M141.57 42.2H138V17.07H141.57V42.2Z" fill="#263238" />
            <path
              d="M131.71 42.2V39.33C130.555 41.395 128.49 42.55 125.76 42.55C121.91 42.55 119.39 40.345 119.39 36.95C119.39 33.31 122.295 31.42 127.825 31.42C128.91 31.42 129.785 31.455 131.29 31.63V30.265C131.29 27.605 129.855 26.1 127.405 26.1C124.815 26.1 123.24 27.64 123.135 30.23H119.915C120.09 26.065 123.065 23.3 127.405 23.3C131.99 23.3 134.65 25.89 134.65 30.3V42.2H131.71ZM122.75 36.845C122.75 38.77 124.185 40.03 126.46 40.03C129.435 40.03 131.29 38.175 131.29 35.34V33.835C129.925 33.66 128.945 33.625 128.035 33.625C124.5 33.625 122.75 34.675 122.75 36.845Z"
              fill="#263238"
            />
            <path
              d="M109.35 42.55C103.995 42.55 100.39 38.665 100.39 32.82C100.39 27.325 104.135 23.3 109.245 23.3C114.775 23.3 118.45 27.78 117.82 33.8H103.995C104.275 37.58 106.165 39.785 109.28 39.785C111.905 39.785 113.725 38.35 114.32 35.935H117.82C116.91 40.065 113.725 42.55 109.35 42.55ZM109.175 25.96C106.34 25.96 104.415 27.99 104.03 31.455H114.075C113.9 28.025 112.045 25.96 109.175 25.96Z"
              fill="#263238"
            />
            <path
              d="M85.3351 42.2H77.3901V17.07H85.3351C93.3501 17.07 97.9701 22.18 97.9701 29.53C97.9701 36.775 93.1751 42.2 85.3351 42.2ZM81.2401 20.395V38.875H85.1601C90.9351 38.875 94.0501 35.305 94.0501 29.53C94.0501 23.86 90.9701 20.395 85.1601 20.395H81.2401Z"
              fill="#263238"
            />
            <path
              d="M74.145 39.545C74.145 40.875 73.095 41.89 71.59 41.89C70.085 41.89 69 40.875 69 39.545C69 38.18 70.085 37.2 71.59 37.2C73.095 37.2 74.145 38.18 74.145 39.545Z"
              fill="#263238"
            />
            <path d="M69.8398 35.55H73.3748V17H69.8398V35.55Z" fill="#263238" />
          </svg>
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <RxCross2 className="h-6 w-6" strokeWidth={2} />
          ) : (
            <IoIosMenu className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </nav>
  );
}
