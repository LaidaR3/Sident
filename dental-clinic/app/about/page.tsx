import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionVision from "@/components/about/Mission";
import DoctorsSection from "@/components/about/DoctorSection";


export default function About() {
    return (
        <main>
            <AboutHero />
            <StorySection />
            <MissionVision />
            <DoctorsSection/>
        </main>
    );
}