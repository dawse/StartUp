import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";


export const metadata: Metadata = {
  title: "B2F Build To Future",
  icons:"https://www.shutterstock.com/image-vector/six-knife-hexagon-simple-symbol-260nw-2080553740.jpg"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FunFact />
      <CTA />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}

