import Hero from "../components/home/Hero";
import About from "@/components/home/About";
import ServicesSection from "@/components/home/ServicesSection";
// import QuoteSection from "@/components/home/QuoteSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TeamSection from "@/components/home/Team";
import ClinicGallery from "@/components/home/Gallery";
import AppointmentContact from "@/components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      {/* <QuoteSection /> */}
      <WhyChooseUs />
      <ServicesSection />
      <TeamSection />
      <ClinicGallery />
      <AppointmentContact />
     
    </main>
  );
}