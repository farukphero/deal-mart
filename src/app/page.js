import { Banner } from "@/Components/Home/Banner";
import Benefits from "@/Components/Home/Benefits";
import Checkout from "@/Components/Home/Checkout";
import DiscoverDeals from "@/Components/Home/DiscoverDeals";
import ExperienceDeal from "@/Components/Home/ExperienceDeal";
import LogoSection from "@/Components/Home/LogoSection";
import Partner from "@/Components/Home/Partner";

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
    </>
  );
}
