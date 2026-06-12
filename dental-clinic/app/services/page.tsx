import { Suspense } from "react";
import ServicesHero from "@/components/services/ServiceHero";
import ServicesGrid from "@/components/services/Services";
import TreatmentProcess from "@/components/services/Process";
import FAQSection from "@/components/services/FAQ";

export default function Services() {
  return (
    <main>
      <ServicesHero />

      <Suspense fallback={null}>
        <ServicesGrid />
      </Suspense>

      <TreatmentProcess />
      <FAQSection />
    </main>
  );
}