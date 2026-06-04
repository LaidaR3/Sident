import Hero from "../components/home/Hero";
import About from "@/components/home/About";
import ServicesSection from "@/components/home/ServicesSection";
// import QuoteSection from "@/components/home/QuoteSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <QuoteSection /> */}
      <WhyChooseUs />
      <ServicesSection />
     
    </main>
  );
}