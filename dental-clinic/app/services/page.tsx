import ServicesHero from "@/components/services/ServiceHero";
import ServicesGrid from "@/components/services/Services";
import TreatmentProcess from "@/components/services/Process";
import FAQSection from "@/components/services/FAQ";

type ServicesPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function Services({ searchParams }: ServicesPageProps) {
  const params = await searchParams;

  return (
    <main>
      <ServicesHero />
      <ServicesGrid initialCategory={params?.category} />
      <TreatmentProcess />
      <FAQSection />
    </main>
  );
}