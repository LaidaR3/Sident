import Hero from "../components/home/Hero";
import About from "@/components/home/About";
import ServicesSection from "@/components/home/ServicesSection";
// import QuoteSection from "@/components/home/QuoteSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TeamSection from "@/components/home/Team";
import AppointmentContact from "@/components/home/Contact";
import ProcessSection from "@/components/home/Process";
import ClinicGallery from "@/components/home/ClinicGallery";
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
      <ProcessSection />
      <AppointmentContact />
     
    </main>
  );
}