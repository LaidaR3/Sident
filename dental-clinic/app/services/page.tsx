import { Suspense } from "react";
import ServicesHero from "@/components/services/ServiceHero";
import ServicesGrid from "@/components/services/Services";
import TreatmentProcess from "@/components/services/Process";
import FAQSection from "@/components/services/FAQ";

export default function Services() {
  return (
    <main>
      <ServicesHero />

      <Suspense fallback={<div className="px-6 py-24">Loading...</div>}>
        <ServicesGrid />
      </Suspense>

      <TreatmentProcess />
      <FAQSection />
    </main>
  );
}