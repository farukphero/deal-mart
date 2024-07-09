import Image from "next/image";
import React from "react";
import image from "../../assets/images/c3ee389f4ea3c69f45a004f30d4c63c6.png";

const ExperienceDeal = () => {
  return (
    <div className="lg:flex mt-20 md:w-[88%] mx-auto">
      <div className="lg:w-1/2 mx-auto">
        <Image
          src={image}
          alt=""
          className="mt-7 lg:mt-0 h-full lg:h-[600px] w-[600px]"
        />
      </div>
      <div className="lg:w-1/2 mx-auto shrink-0  shadow-none rounded-r-none flex justify-center items-center h-full lg:h-[600px]">
        <div className="lg:w-9/12 mx-auto  p-5 lg:p-0">
          <div className="mt-10">
            <div className=" ">
              <svg
                width="94"
                height="104"
                viewBox="0 0 94 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex justify-center mx-auto md:mx-0"
              >
                <path
                  d="M76.1895 51.0679C76.087 50.8572 75.9083 50.3616 75.6854 49.7423C74.9418 47.6763 73.5184 47.9036 73.5184 47.9036C73.5184 47.9036 73.8072 48.3873 73.3253 49.6417C73.1801 50.4991 68.2781 56.8704 67.3914 55.2288C67.3163 55.09 67.2969 54.9281 67.315 54.7713C67.5922 52.3746 67.6849 49.9213 67.5966 47.4467C67.2014 36.0078 63.0051 24.0677 55.7813 14.6862C55.7605 14.6597 55.7416 14.6352 55.7208 14.6106C55.6077 14.4642 55.4939 14.3184 55.3793 14.1732C55.3791 14.173 55.3789 14.1728 55.3789 14.1726V14.1717C55.0705 13.7819 54.7569 13.3963 54.4381 13.0155C53.6119 12.0283 53.1923 12.8644 52.2923 11.9421C51.9992 11.6414 51.4849 11.8211 51.4376 12.239C50.3937 21.6318 48.196 25.24 45.8208 28.156C42.8116 31.3779 38.2386 35.1623 36.3569 40.2265C35.4278 42.2999 33.8448 44.2991 33.3614 46.3384C33.2833 46.758 32.7225 46.7983 32.5006 46.5485C30.6436 44.6986 29.2588 41.0652 28.7053 37.8362C28.5181 36.7443 27.8328 37.5991 27.8496 36.6844C27.8458 36.3894 27.4903 36.2438 27.2804 36.4537C17.6266 46.0507 14.6157 59.3938 16.3687 73.397C16.6542 75.723 16.7442 78.0569 17.3343 80.2524C19.2879 87.8529 24.5694 93.746 30.6601 98.0201C36.149 101.872 42.166 104.527 49.2536 103.881C49.2514 103.881 49.2489 103.88 49.2466 103.88C64.8515 102.721 76.6012 91.2243 78.7992 75.7177C80.3564 65.9415 78.2356 56.9127 76.1895 51.0679Z"
                  fill="#F9AF38"
                />
                <path
                  d="M67.7426 55.5254C67.7594 55.5273 67.7763 55.5291 67.7931 55.5291H67.7407L67.7426 55.5254Z"
                  fill="#F48931"
                />
                <path
                  d="M36.3569 38.1372C36.0657 38.7007 35.7972 39.2643 35.5475 39.8221L35.5457 39.8183C35.7953 39.2605 36.0638 38.6988 36.3569 38.1372Z"
                  fill="#F48931"
                />
                <path
                  d="M65.4071 68.0696C64.9901 67.0108 64.8759 66.6965 64.6186 66.1704C64.5268 65.983 64.2502 66.0193 64.2093 66.2236C64.0713 66.9121 64.0389 67.3894 63.6851 68.3109C63.1311 69.7878 61.9669 71.0915 60.8385 72.1592C60.6886 72.3037 60.4732 72.2636 60.3616 72.1278C60.3106 72.0374 60.2814 71.95 60.2898 71.8804C61.3533 63.023 58.5333 53.0101 52.7511 45.5005C52.7377 45.4831 52.7248 45.468 52.7118 45.4519C52.6868 45.4196 52.6618 45.3874 52.6369 45.3553C51.8678 44.3672 51.2462 43.8451 50.3756 42.9537C50.1829 42.7562 49.8468 42.8735 49.816 43.1481C49.1324 49.2996 48.036 52.5479 46.4806 54.4573C44.966 56.3181 43.4116 56.8364 41.675 59.4916C40.0881 61.9199 39.2358 64.096 38.7547 66.0903C38.6923 66.3486 37.6766 66.5702 37.5032 66.3688C37.0083 65.7966 36.421 64.973 35.9208 63.8448C35.587 63.0916 35.3546 62.3447 35.1935 61.6433C34.921 60.4561 34.5327 60.2496 34.5256 59.5141C34.5233 59.3205 34.2897 59.2257 34.1525 59.363C27.4198 66.056 25.4291 75.7291 27.2641 85.371C29.8201 98.8001 40.0951 104.02 47.5426 103.903C47.8682 103.898 48.2835 103.964 48.7188 103.93C53.3167 103.574 63.4709 101.218 67.1957 88.3823C69.3278 81.0354 67.7289 73.9619 66.1928 69.5391C65.9966 68.9726 65.4071 68.0696 65.4071 68.0696Z"
                  fill="#DF646E"
                />
                <path
                  d="M39.411 62.1609L38.7548 63.8628C38.942 63.3106 39.1594 62.7395 39.411 62.1609Z"
                  fill="#DC4955"
                />
                <path
                  d="M43.093 94.2539C42.9052 94.2539 42.7142 94.2163 42.5307 94.1371C41.8118 93.8262 41.481 92.9913 41.7919 92.2725L49.8621 73.6097C50.173 72.8909 51.0079 72.5602 51.7267 72.8709C52.4457 73.1818 52.7766 74.0167 52.4656 74.7355L44.3953 93.3982C44.1639 93.9338 43.6414 94.2539 43.093 94.2539Z"
                  fill="#F5FCFF"
                />
                <path
                  d="M39.8963 82.6757C39.8799 82.6757 39.8634 82.6757 39.8468 82.6755C37.1479 82.6464 34.9785 80.1742 35.011 77.1648C35.0433 74.1732 37.2396 71.7593 39.9165 71.7593C39.9326 71.7593 39.9485 71.7593 39.9646 71.7595C41.3127 71.774 42.561 72.3828 43.4797 73.4739C44.3465 74.5036 44.8157 75.8519 44.8004 77.2704C44.785 78.6888 44.2871 80.0266 43.398 81.0373C42.4676 82.0952 41.2257 82.6757 39.8963 82.6757ZM39.9164 74.5958C38.7895 74.5958 37.8629 75.7573 37.8474 77.1955C37.8319 78.641 38.7424 79.8271 39.8774 79.8392C40.388 79.852 40.8804 79.6049 41.2681 79.164C41.7089 78.6629 41.9559 77.9795 41.964 77.2397C41.9719 76.4999 41.7395 75.8114 41.3099 75.301C40.9317 74.8519 40.4432 74.6015 39.9341 74.596C39.9281 74.5958 39.9222 74.5958 39.9164 74.5958Z"
                  fill="#F5FCFF"
                />
                <path
                  d="M54.082 95.6484C54.066 95.6484 54.0503 95.6484 54.034 95.6482C51.3353 95.6191 49.1659 93.1469 49.1982 90.1375C49.2308 87.1457 51.4268 84.7319 54.1038 84.7319C54.1199 84.7319 54.1359 84.7319 54.152 84.7321C56.8507 84.7612 59.0201 87.2334 58.9878 90.2428V90.243C58.9553 93.2345 56.759 95.6484 54.082 95.6484ZM54.1036 87.5685C52.9765 87.5685 52.0503 88.73 52.0348 90.1681C52.0191 91.6136 52.9296 92.7995 54.0647 92.8118C55.1928 92.8292 56.1357 91.6579 56.1512 90.2122V90.2124C56.1669 88.7667 55.2564 87.5808 54.1214 87.5685C54.1155 87.5685 54.1095 87.5685 54.1036 87.5685Z"
                  fill="#F5FCFF"
                />
                <path
                  d="M22.0524 20.0078C21.4006 23.4627 19.1591 25.2337 18.1822 26.0188C18.0008 26.1646 17.7342 26.113 17.6183 25.9114C16.9933 24.8241 15.5105 22.4224 16.162 18.9696C16.3095 18.1874 16.2357 17.3081 16.5559 16.6328C17.6504 14.3246 19.4872 12.6909 20.243 12.0833C20.4244 11.9375 20.691 11.9891 20.807 12.1907C21.2992 13.047 22.4455 15.2973 22.5921 17.9015C22.6316 18.6038 22.1906 19.2742 22.0524 20.0078Z"
                  fill="#DF646E"
                />
                <path
                  d="M82.4818 25.051C83.1618 28.1803 81.5769 30.6231 80.9689 31.6173C80.857 31.8003 80.6144 31.8529 80.4368 31.7326C79.471 31.0785 77.1428 29.5971 76.4628 26.4672C76.3495 25.946 75.9979 25.3891 76 24.8778C76.0106 22.3194 77.2666 20.0087 77.7732 19.18C77.8852 18.997 78.1278 18.9444 78.3054 19.0647C79.0414 19.5633 80.8636 20.9323 81.9895 22.9413C82.3409 23.5682 82.3201 24.3068 82.4818 25.051Z"
                  fill="#DF646E"
                />
                <path
                  d="M67.7931 55.5291H67.7407L67.7426 55.5254C67.7594 55.5273 67.7763 55.5291 67.7931 55.5291Z"
                  fill="#F48931"
                />
              </svg>

              <div className="mt-5">
                <h1 className="text-[#263238] text-4xl leading-tight md:text-[56px] font-medium flex justify-center md:justify-start items-center">
                  Experience Real-Time Deals
                </h1>
                <p className="font-normal">
                  Enjoy features like real-time deal alerts, personalized
                  shopping lists, and seamless checkout that set us apart from
                  the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDeal;