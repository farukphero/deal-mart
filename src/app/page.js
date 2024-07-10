import { Banner } from "@/Components/Home/Banner";
import Benefits from "@/Components/Home/Benefits";
import Checkout from "@/Components/Home/Checkout";
import DiscoverDeals from "@/Components/Home/DiscoverDeals";
import ExperienceDeal from "@/Components/Home/ExperienceDeal";
import { FaqItems } from "@/Components/Home/Faq";
import LogoSection from "@/Components/Home/LogoSection";
import Partner from "@/Components/Home/Partner";
import { Testimonial } from "@/Components/Home/Testimonial";
import UnlockBestDeals from "@/Components/Home/UnlockBestDeals";

export default function Home() {
  return (
    <>
      <Banner />
      <LogoSection />
      <DiscoverDeals />
      <Benefits/>
      <Partner/>
      <ExperienceDeal/>
      <Checkout/>
      <Testimonial/>
      <FaqItems/>
      <UnlockBestDeals/>
    </>
  );
}
