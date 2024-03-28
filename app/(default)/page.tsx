export const metadata = {
  title: "DDAW.XYZ - The Decentralized DAW",
  description: "Record, Play, Mix, Master, Mint Audio Video NFTs",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  );
}
