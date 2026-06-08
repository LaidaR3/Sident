import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionVision from "@/components/about/Mission";
import DoctorsSection from "@/components/about/DoctorSection";
import StatsSection from "@/components/about/Stats";
import TechnologyFacilities from "@/components/about/TechFacilities";
export default function About() {
    return (
        <main>
            <AboutHero />
            <StorySection />
            <MissionVision />
            <DoctorsSection/>
            <StatsSection />
            <TechnologyFacilities />
        </main>
    );
}